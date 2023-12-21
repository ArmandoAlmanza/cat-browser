import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/ErrorPage";
import BreedsShowcase from "../pages/BreedsShowcase";

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
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
