import React from "react";
import avatar from "../images/avatar.JPG";
import { navMenu } from "../dataFake";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useScroll } from "../useHook/useScroll";

export const Sidebar = () => {
    const [state, setState] = useState(navMenu);
    const [isShow, setShow] = useState(false);

    const activeId = useScroll(navMenu, 54);
    console.log(activeId);

    const myReducer = useSelector((state) => state);
    const { isShowSidebar } = myReducer;

    useEffect(() => {
        setState(navMenu);
    }, []);

    useEffect(() => {
        setShow(isShowSidebar);
    }, [isShowSidebar]);

    // const onActiveNav = (e) => {
    //     let newData = [].concat(state)
    //     for (let i = 0; i < newData.length; i++) {
    //         if (newData[i].id === e) {
    //             newData[i].isActive = true
    //         }
    //         else {
    //             newData[i].isActive = false
    //         }
    //     }
    //     setState(newData)
    // }

    return (
        <div className={`sidebar ${isShow ? "menu-open" : ""}`}>
            <div className="scroll-bar">
                <div className="h1-top">
                    <div className="h1-logo">
                        <div className="img">
                            <img
                                className="w-100"
                                src={avatar}
                                alt="avatar"
                            ></img>
                        </div>
                        <h5>Nguyễn Đăng Quang</h5>
                    </div>
                </div>
                <ul className="nav nav-menu">
                    {state.length > 0 &&
                        state.map((value, index) => {
                            return (
                                <li
                                    className={`${
                                        value.url === activeId ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <a
                                        className="nav-link"
                                        href={`#${value.url}`}
                                    >
                                        <i className={value.icon} />
                                        <span>{value.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="nav justify-content-center social-icons">
                <a href="https://www.facebook.com/dangquang1808">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://github.com/quang180898">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};
