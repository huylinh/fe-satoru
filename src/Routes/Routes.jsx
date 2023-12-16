import Home from "../Pages/Home/Home";
import Result from "../Pages/Result/Result.jsx";
import WorkspaceDetails from "../Pages/WorkspaceDetails/WorkspaceDetails";

export const NormalRoutes = [
  { path: "/", element: <Home /> },
  { path: "/result", element: <Result /> },
  {
    path: "/workspaces/:id",
    element: <WorkspaceDetails />,
  },
];
