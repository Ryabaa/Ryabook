import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import store from "../redux";

import GlobalStyles from "../styles/global-style";
import AppStyle from "./app-style";

import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Users from "../pages/allUsers/AllUsers";

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <AppStyle>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Navigate to="/signup" replace />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </BrowserRouter>
            </AppStyle>
        </Provider>
    );
};

export default App;
