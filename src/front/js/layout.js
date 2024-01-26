import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { LoginUsers } from "./pages/logInUsers.js";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { SignUpUsers } from "./pages/signUpUsers.jsx";
import { LogIn } from "./pages/logIn.jsx";
import { SignUpForOrganizers } from "./pages/signUpForOrganizers.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<SignUpUsers />} path="/signUpUsers" />
                        <Route element={<LogIn />} path="/logIn" />
                        <Route element={<SignUpForOrganizers />} path="/signUpForOrganizers" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<LoginUsers />} path="/Login-users" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
