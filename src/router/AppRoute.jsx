import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Apropos } from "../views/A-propos/Apropos";
import { Conducteur } from "../views/Conducteur/Conducteur";
import { Contact } from "../views/Contact/Contact";
import { Home } from "../views/Home/Home";
import { Partenaire } from "../views/Partenaire/Partenaire";

export const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/conducteur",
                element: <Conducteur />,
            },
            {
                path: "/partenaire",
                element: <Partenaire />,
            },
            {
                path: "/a-propos",
                element: <Apropos />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },

    // {
    //     path: "/login",
    //     element: <Login />,
    // },
])