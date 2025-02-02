import React from "react";
import Navbar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;