const name = "COMMON";
const actions = {
    THEME_STYLE: name + "THEME_STYLE",

    TOGGLE_SIDEBAR: name + "TOGGLE_SIDEBAR",

    /*chooseThemeStyle*/
    chooseThemeStyle: (params) => ({
        type: actions.THEME_STYLE,
        params,
    }),

    /*toggle sidebar */
    toggleSidebar: (params) => ({
        type: actions.TOGGLE_SIDEBAR,
        params,
    }),
};

export default actions;
