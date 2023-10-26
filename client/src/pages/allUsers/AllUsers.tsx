import { FC, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getAllUsers, deleteUser } from "../../service";

import StyledUsers from "./allusers-style";

import User from "./User";

const Users: FC = () => {
    const navigate = useNavigate();
    const [resMessage, setResMessage] = useState<any>("");
    const [users, setUsers] = useState<[]>([]);

    const loadPage = useCallback(async () => {
        const { message, users } = await getAllUsers();
        setResMessage(message);
        setUsers(users);
    }, [setUsers]);

    const handleDeleteUser = async (id: string) => {
        await deleteUser(id);
        navigate(0);
    };

    useEffect(() => {
        loadPage();
    }, [loadPage]);

    return (
        <StyledUsers>
            <h2>All users list</h2>
            <h3>{resMessage}</h3>
            {users.map((user, index) => (
                <User key={index} user={user} deleteUser={handleDeleteUser} />
            ))}
        </StyledUsers>
    );
};

export default Users;
