import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import RockPaperScissors from "../projects/rock-paper-scissors/RockPaperScissors";
import MatchingEmoji from "../projects/matching-emoji/MatchingEmoji";
import FolderManager from "../projects/folder-manager/FolderManager";

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
  {
    path: "/react-project-collection/folder-manager",
    element: <FolderManager />,
  },
]);

export default route;
