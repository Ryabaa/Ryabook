import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ILogin } from "../../types/auth";

import { RootState } from "../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { authRequest } from "../../redux/reducers/authSlice";

import Container from "../../styles/container";
import Auth from "./auth-style";

import Form from "../../components/form/Form";

const fields = [
    { key: "username", value: "Username", type: "text" },
    { key: "password", value: "Password", type: "password" },
];

const LogIn: FC = () => {
    const dispatch = useAppDispatch();
    const { message, success } = useAppSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleLoginUser = async (data: ILogin) => {
        dispatch(authRequest({ ...data, type: "login" }));
    };

    useEffect(() => {
        if (success) {
            navigate("/profile", { replace: true });
        }
    }, [success, navigate]);

    return (
        <Auth>
            <h2>Log in</h2>
            <p>{message}</p>
            <Form formSubmit={handleLoginUser} fields={fields} submitName="Log in"></Form>
            <Container column="20px" aself="center">
                <Link to="/signup">Sign Up</Link>
                <Link to="/reset">Reset password</Link>
            </Container>
        </Auth>
    );
};

export default LogIn;
