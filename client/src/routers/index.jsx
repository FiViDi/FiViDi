import { createBrowserRouter } from "react-router-dom";
import Parents from "../views/Parents";
import LoginPage from "../views/LoginPage";
import SignUpPage from "../views/SignUpPage";
import HomePage from "../views/HomePage";


const router = createBrowserRouter([
  {
    element: <Parents />,
    children: [
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;