import { createBrowserRouter } from "react-router-dom";
import Parents from "../views/Parents";
import Loginpage from "../views/Loginpage";
import RegisterPage from "../views/Registerpage";

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
				path: "/",
				element: <Loginpage />,
			},
		],
	},
]);

export default router;
