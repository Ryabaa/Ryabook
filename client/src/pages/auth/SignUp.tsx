import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { RootState } from "../../redux/store/store";
import { authRequest } from "../../redux/reducers/authSlice";

import { ISignUp } from "../../types/auth";

import Container from "../../styles/container";
import Auth from "./auth-style";

import Form from "../../components/form/Form";

const fields = [
    { key: "username", value: "Username", type: "text" },
    { key: "password", value: "Password", type: "password" },
    { key: "passwordConfirmation", value: "Confirm password", type: "password" },
    { key: "email", value: "E-mail", type: "email" },
];

const SignUp: FC = () => {
    const dispatch = useAppDispatch();
    const { message, success } = useAppSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleSignUpUser = async (data: ISignUp) => {
        dispatch(authRequest({ ...data, type: "signup" }));
    };

    useEffect(() => {
        if (success) {
            navigate("/profile", { replace: true });
        }
    }, [success, navigate]);

    return (
        <Auth>
            <h2>Sign Up</h2>
            <p>{message}</p>
            <Form formSubmit={handleSignUpUser} fields={fields} submitName="Sign up" />
            <Container>
                <Link to="/login">Log In</Link>
            </Container>
        </Auth>
    );
};

export default SignUp;
