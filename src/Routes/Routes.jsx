import Home from "../Pages/Home/Home";
import Result from "../Pages/Result/Result.jsx";
import Review from "../Pages/Review/Review";

export const NormalRoutes = [
    {path: "/", element: <Home />},
    {path: '/result', element: <Result/>},
    {path: '/reviews',element: <Review/>}
]
