import { createBrowserRouter } from "react-router-dom";

import RockPaperScissors from "../projects/rock-paper-scissors/RockPaperScissors";
import MatchingEmoji from "../projects/matching-emoji/MatchingEmoji";
import Home from "../pages/Home";

const route = createBrowserRouter([
  {
    path: "/react-project-collection",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/react-project-collection/rock-paper-scissors",
    element: <RockPaperScissors />,
  },
  {
    path: "/react-project-collection/matching-emoji",
    element: <MatchingEmoji />,
  },
]);

export default route;
