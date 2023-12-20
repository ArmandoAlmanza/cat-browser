import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatlistGrid from "../components/CatlistGrid";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/cat-list",
                element: <CatlistGrid />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
