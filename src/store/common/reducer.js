import actions from "./actions";

const initialState = {
    themeStyle: null,
    isShowSidebar: null
};

const myReducer = (state = initialState, action) => {

    switch (action.type) {
        // sidebar
        case actions.THEME_STYLE:
            return {
                ...state,
                themeStyle: action.params,
            };

        // sidebar
        case actions.TOGGLE_SIDEBAR:
            return {
                ...state,
                isShowSidebar: action.params,
            };

        default:
            return state;
    }
};

export default myReducer;
