import { createBrowserRouter } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import NewVideo from "./views/NewVideo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                path: '/nuevo-video',
                element: <NewVideo />
            }
        ]
    }
]);