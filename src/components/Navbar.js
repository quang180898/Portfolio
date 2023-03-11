import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../store/common/actions";

export const Navbar = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState(false);

    const toggleMenu = (show) => {
        setState(show)
        dispatch(actions.toggleSidebar(show))
    };
    return (
        <div className="navbar">
            <div className="d-flex align-items-center">
                <div className="navbar-brand">
                    <a className="logo-text" href="/">
                        Quang
                    </a>
                </div>
                <button className="toggler-menu" onClick={() => toggleMenu(!state)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
};
