import EmojiBoard from "./components/EmojiBoard";

export default function MatchingEmoji() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "40px", marginBottom: "25px" }}>
        Matching Emoji
      </div>
      <EmojiBoard />
    </main>
  );
}
