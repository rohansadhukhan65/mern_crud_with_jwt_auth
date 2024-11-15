import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contacts from "./pages/Contacts.jsx";
import CreateContact from "./pages/CreateContact.jsx";
import EditContact from "./pages/EditContact.jsx";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/create-contact", element: <CreateContact /> },
  { path: "/edit-contact", element: <EditContact /> },
]);
const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
