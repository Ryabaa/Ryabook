import { FC, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

import { closeAvatarModal, removeAvatarRequest, uploadAvatarRequest } from "../../redux/reducers/avatarSlice";

import {
    Modal,
    Container,
    CloseButton,
    ModalSubstrate,
    ModalWrapper,
    UploadButton,
    RemoveButton,
    Head,
} from "./avatar-style";

const Avatar: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.currentUser);
    const modalIsOpen = useAppSelector((state) => state.avatar.modalIsOpen);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("avatar", file);

            dispatch(uploadAvatarRequest(formData));
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveAvatar = async () => {
        dispatch(removeAvatarRequest());
    };

    const handleCloseModal = async () => {
        dispatch(closeAvatarModal());
    };

    return (
        <div>
            {modalIsOpen && (
                <ModalWrapper>
                    <ModalSubstrate onClick={handleCloseModal} />
                    <Modal>
                        <Container>
                            <Head>
                                <img src={user.avatar} alt="" />
                                <h2>Profile photo</h2>
                            </Head>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                accept="image/jpeg,image/png"
                                onChange={handleUploadAvatar}
                            />
                            <UploadButton onClick={triggerFileInput}>Upload Photo</UploadButton>
                            <RemoveButton onClick={handleRemoveAvatar}>Remove current photo</RemoveButton>
                            <CloseButton onClick={handleCloseModal}>Cancel</CloseButton>
                        </Container>
                    </Modal>
                </ModalWrapper>
            )}
        </div>
    );
};

export default Avatar;
