import { useRef, useState } from "react";

import getRandomEmojiList from "../utils/getRandomEmojiList";

export default function useCardClick() {
  const [listEmojiObj, setListEmojiObj] = useState(getRandomEmojiList());
  const firstFlippedEmojiIdx = useRef(null);
  const isCheckInProgress = useRef(false);

  const handleFlipped = (idx) => {
    const fistFlippedIdx = firstFlippedEmojiIdx.current;

    if (isCheckInProgress.current) return;
    if (fistFlippedIdx === idx) return;

    handleSetEmojiObj(idx, true);
    if (fistFlippedIdx === null) {
      firstFlippedEmojiIdx.current = idx;
      return;
    }
    // 2nd card flipped
    isCheckInProgress.current = true;

    // if not same emoji then flip back
    if (listEmojiObj[idx].emoji !== listEmojiObj[fistFlippedIdx].emoji) {
      setTimeout(() => {
        listEmojiObj[idx].flipped = false;
        listEmojiObj[fistFlippedIdx].flipped = false;
        setListEmojiObj([...listEmojiObj]);
        resetFlipCheck();
      }, 1000);
      return;
    }
    resetFlipCheck();
  };

  const handleSetEmojiObj = (idx, flip) => {
    const newArr = [...listEmojiObj];
    newArr[idx].flipped = flip;
    setListEmojiObj(newArr);
  };

  const resetFlipCheck = () => {
    isCheckInProgress.current = false;
    firstFlippedEmojiIdx.current = null;
  };
  return [listEmojiObj, handleFlipped];
}
