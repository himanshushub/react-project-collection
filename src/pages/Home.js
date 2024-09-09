import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        fontSize: "23px",
      }}
    >
      <Link to="/react-project-collection/rock-paper-scissors">
        Rock Paper Scissors
      </Link>
      <Link to="/react-project-collection/matching-emoji">
        Matching Emoji Game
      </Link>
    </div>
  );
}
