import React from "react";
import ReactDOM from "react-dom/client";
import {
	Link,
	Route,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Log/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
