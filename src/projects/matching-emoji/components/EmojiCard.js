export default function EmojiCard(props) {
  const { emoji, flipped, handleFlipped, cardIdx } = props;

  const Emoji = () => {
    if (flipped) return <div>{emoji}</div>;
    return <>?</>;
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        backgroundColor: "turquoise",
      }}
      onClick={() => {
        handleFlipped(cardIdx);
      }}
    >
      <Emoji />
    </div>
  );
}
