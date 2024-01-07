import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { store } from "../redux/store/store";

import GlobalStyles from "../styles/global-style";
import AppStyle from "./app-style";

import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import UserList from "../pages/userList/UserList";
import Profile from "../pages/Profile";

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <AppStyle>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Navigate to="/profile" replace />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </AppStyle>
        </Provider>
    );
};

export default App;
