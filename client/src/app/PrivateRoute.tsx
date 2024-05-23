import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { setAuthStatus, setLoading } from "../redux/reducers/authSlice";

import Loader from "../components/loader/Loader";
import axiosInstance from "../service";

const PrivateRoute: FC<{ component: FC<any> }> = ({ component: Component }) => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            dispatch(setLoading(true));
            try {
                await axiosInstance.get("http://localhost:4000/user/check-auth/");
                dispatch(setAuthStatus(true));
            } catch (error) {
                dispatch(setAuthStatus(false));
            } finally {
                setIsAuthChecked(true);
                dispatch(setLoading(false));
            }
        };

        if (!isAuthChecked) {
            checkAuth();
        }
    }, [dispatch, isAuthChecked]);

    if (isLoading || !isAuthChecked) {
        return <Loader />;
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
