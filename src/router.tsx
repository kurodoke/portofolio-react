import { createBrowserRouter } from "react-router-dom";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
    //route to profile page
    {
        path: "/",
        element: <Profile />
    }
])