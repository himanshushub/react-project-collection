import { emojis } from "../data/emoji.constants";

export default function getRandomEmojiList() {
  const initialEmojis = emojis.splice(0, 8);
  const finalEmoji = [
    ...initialEmojis.map((emj) => ({ emoji: emj, flipped: false })),
    ...initialEmojis.map((emj) => ({ emoji: emj, flipped: false })),
  ];

  for (let idx = 0; idx < finalEmoji.length; idx++) {
    const randIdx = Math.floor(Math.random() * finalEmoji.length);
    const temp = finalEmoji[idx];
    finalEmoji[idx] = finalEmoji[randIdx];
    finalEmoji[randIdx] = temp;
  }
  return finalEmoji;
}
