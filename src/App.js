import React from "react";
import configureStore from "./store";
import { Provider } from "react-redux";
import { Main } from "./components/Main";


function App() {
    const store = configureStore();

    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;
