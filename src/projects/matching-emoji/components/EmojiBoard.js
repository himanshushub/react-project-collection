import EmojiCard from "../components/EmojiCard";
import useCardClick from "../hooks/use-card-click.hook";

export default function EmojiBoard() {
  const [listEmojiObj, handleFlipped] = useCardClick();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gap: "20px",
        fontSize: "50px",
      }}
    >
      {listEmojiObj.map((obj, idx) => {
        return (
          <EmojiCard
            key={"key" + obj.emoji + idx}
            emoji={obj.emoji}
            flipped={obj.flipped}
            handleFlipped={handleFlipped}
            cardIdx={idx}
          />
        );
      })}
    </div>
  );
}
