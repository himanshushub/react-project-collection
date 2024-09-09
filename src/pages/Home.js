import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/react-project-collection">
        HOME
      </Link>
      <Link to="/react-project-collection/rock-paper-scissors">
        Rock Paper Scissors
      </Link>
    </div>
  )
}