import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { store } from "../redux/store/store";

import GlobalStyles from "../styles/global-style";
import AppStyle from "./app-style";

import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Profile from "../pages/profile/Profile";
import Followers from "../components/followers/Followers";
import Notifications from "../components/notifications/Notifications";
import PrivateRoute from "./PrivateRoute";
import NotificationPopUp from "../components/notifications/NotificationPopUp";
import Avatar from "../components/avatar/Avatar";
import Post from "../components/posts/Post";
import PostCreator from "../components/posts/PostCreator";

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <AppStyle>
                <Avatar />
                <Post />
                <PostCreator />
                <Followers />
                <Notifications />
                <NotificationPopUp />
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Navigate to="/profile" replace />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
                    </Routes>
                </BrowserRouter>
            </AppStyle>
        </Provider>
    );
};

export default App;
