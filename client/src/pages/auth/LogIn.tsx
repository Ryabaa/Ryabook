import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "../../styles/container";
import Auth from "./auth-style";

import { IUserAccount } from "../../types/user";
import { loginUser } from "../../service";

import Form from "../../components/form/Form";

const fields = [
    { key: "username", value: "Username", type: "text" },
    { key: "password", value: "Password", type: "password" },
];

const LogIn: FC = () => {
    const navigate = useNavigate();
    const [resMessage, setResMessage] = useState<any>(null);

    const handleLoginUser = async (data: IUserAccount) => {
        const res = await loginUser(data);
        setResMessage(res.data.message);
        if (res.status === 201) {
            setTimeout(() => navigate("/users"), 2000);
        }
    };

    return (
        <Auth>
            <h2>Log in</h2>
            <p>{resMessage ? resMessage : ""}</p>
            <Form formSubmit={handleLoginUser} fields={fields} submitName="Log in"></Form>
            <Container column="20px" aself="center">
                <Link to="/signup">Sign Up</Link>
                <Link to="/reset">Reset password</Link>
            </Container>
        </Auth>
    );
};

export default LogIn;
