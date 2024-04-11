import { createHashRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Apropos } from "../views/A-propos/Apropos";
import { Conducteur } from "../views/Conducteur/Conducteur";
import { Confidentiel } from "../views/Confidential/Confidentiel";
import { Contact } from "../views/Contact/Contact";
import { Home } from "../views/Home/Home";
import { Partenaire } from "../views/Partenaire/Partenaire";
import { Term } from "../views/Term&Condition/Term";

export const AppRoute = createHashRouter([
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
            {
                path: "/term",
                element: <Term />,
            },
            {
                path: "/politique-confidentialite",
                element: <Confidentiel />,
            },
        ]

    },

])