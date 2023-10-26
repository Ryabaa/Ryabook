import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IUserAccount } from "../../types/user";
import { signUpUser } from "../../service";

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
    const navigate = useNavigate();
    const [resMessage, setResMessage] = useState<any>(null);

    const handleSignUp = async (data: IUserAccount) => {
        try {
            const res = await signUpUser(data);
            setResMessage(res.data.message);
            if (res.status === 201) {
                setTimeout(() => navigate("/login"), 2000);
            }
        } catch (error) {
            throw error;
        }
    };

    return (
        <Auth>
            <h2>Sign Up</h2>
            <p>{resMessage ? resMessage : ""}</p>
            <Form formSubmit={handleSignUp} fields={fields} submitName="Sign up" />
            <Container>
                <Link to="/login">Log In</Link>
            </Container>
        </Auth>
    );
};

export default SignUp;
