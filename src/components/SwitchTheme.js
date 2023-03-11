import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../store/common/actions";

export const SwitchTheme = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState(false);

    const onChangeTheme = (show) => {
        setState(show)
        dispatch(actions.chooseThemeStyle(show))
    }
    return (
        <label className="color-switch" onClick={() => onChangeTheme(!state)}>
            <i className="fas fa-moon"></i>
        </label>
    )
}