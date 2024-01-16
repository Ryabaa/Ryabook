import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

import { getUserList, deleteUser } from "../../redux/reducers/userListSlice";

import StyledUserList from "./userlist-style";

import User from "./User";

const UserList: FC = () => {
    const dispatch = useAppDispatch();
    const { message, list } = useAppSelector((state: RootState) => state.users);
    const navigate = useNavigate();

    const handleDeleteUser = async (id: string) => {
        dispatch(deleteUser({ id: id }));
        navigate(0);
    };

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    return (
        <StyledUserList>
            <h2>User List</h2>
            <h3>{message}</h3>
            {list.map((user, index) => (
                <User key={index} user={user} deleteUser={handleDeleteUser} />
            ))}
        </StyledUserList>
    );
};

export default UserList;
