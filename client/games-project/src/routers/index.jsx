import { createBrowserRouter } from "react-router-dom";
import Parents from "../views/Parents";
import Loginpage from "../views/Loginpage";
import RegisterPage from "../views/Registerpage";
import Game from "../views/Gamepage";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Parents />,
	},
	{
		element: <Parents />,
		children: [
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/login",
				element: <Loginpage />,
			},
			{
				path: "/",
				element: <Game />,
			},
		],
	},
]);

export default router;
