import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BackToTop } from "./BackToTop";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { SwitchTheme } from "./SwitchTheme";
import { MainSection } from "./MainSection";

export const Main = () => {
    const [isShow, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const myReducer = useSelector((state) => state);
    const { themeStyle } = myReducer;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    useEffect(() => {
        setShow(themeStyle);
    }, [themeStyle]);

    return (
        <div className={`portfolio ${isShow ? "theme-light" : ""}`}>
            <Navbar />
            <Sidebar />
            <MainSection />
            <SwitchTheme />
            {showButton ? <BackToTop /> : null}
        </div>
    );
};
