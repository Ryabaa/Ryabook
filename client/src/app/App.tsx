import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import store from "../redux";

import GlobalStyles from "../styles/global-style";
import AppStyle from "./app-style";

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <AppStyle>
                <BrowserRouter>
                    <Routes></Routes>
                </BrowserRouter>
            </AppStyle>
        </Provider>
    );
};

export default App;
