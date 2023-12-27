import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/ErrorPage";
import BreedsShowcase from "../pages/BreedsShowcase";
import Feli from "../pages/Feli";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/breeds",
                element: <BreedsShowcase />,
            },
            {
                path: "/feli",
                element: <Feli />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
