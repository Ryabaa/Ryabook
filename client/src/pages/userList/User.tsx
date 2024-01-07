import { FC } from "react";

import Container from "../../styles/container";
import Button from "../../styles/button";

const User: FC<any> = ({ user, deleteUser }) => {
    const { _id, roles, avatar, username } = user;

    const handleDeleteUser = () => {
        deleteUser(_id);
    };

    return (
        <Container
            width="320px"
            border="2px solid #ffffff14"
            radius="10px"
            padding="15px"
            align="center"
            justify="space-between">
            <img src={avatar} alt="" width="50px" />
            <p>{`${roles} - ${username}`}</p>
            <Button onClick={handleDeleteUser} background="#b64242">
                Delete
            </Button>
        </Container>
    );
};

export default User;
