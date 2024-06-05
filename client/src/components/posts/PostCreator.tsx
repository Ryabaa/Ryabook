import { FC, useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

import {
    closePostCreatorModal,
    closePostCreatorPopUp,
    openPostCreatorPopUp,
    uploadPostRequest,
} from "../../redux/reducers/postSlice";

import {
    Modal,
    CloseButton,
    ModalSubstrate,
    ModalWrapper,
    Content,
    Head,
    Selection,
    Photo,
    PopUp,
    Discard,
} from "./styles/post-creator-style";

import { IoClose } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";

import { cropImage } from "../../utils/cropImage";

const Post: FC = () => {
    const dispatch = useAppDispatch();
    const { postCreatorModalIsOpen, postCreatorPopUpIsOpen } = useAppSelector((state) => state.post);
    const [currentFormData, setCurrentFormData] = useState<FormData | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const croppedImage = await cropImage(file);
            const formData = new FormData();
            formData.append("post", croppedImage);
            setCurrentFormData(formData);
            setImageSrc(URL.createObjectURL(croppedImage));
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleUploadPost = async () => {
        dispatch(uploadPostRequest(currentFormData!));
        handleCloseModal();
    };

    const handleOpenPopUp = async () => {
        dispatch(openPostCreatorPopUp());
    };

    const handleClosePopUp = async () => {
        dispatch(closePostCreatorPopUp());
    };

    const handleClearData = async () => {
        setCurrentFormData(null);
        setImageSrc(null);
    };

    const handleCloseModal = async () => {
        handleClearData();
        dispatch(closePostCreatorPopUp());
        dispatch(closePostCreatorModal());
    };

    useEffect(() => {
        if (postCreatorModalIsOpen) {
            console.log("вай");
        }
    }, [dispatch, postCreatorModalIsOpen]);

    return (
        <div>
            {postCreatorModalIsOpen && (
                <ModalWrapper>
                    <ModalSubstrate onClick={imageSrc ? handleOpenPopUp : handleCloseModal} />
                    <Modal>
                        <Content>
                            <Head>
                                {imageSrc && <button onClick={handleClearData}>Back</button>}
                                <h2>Create new post</h2>
                                {imageSrc && <button onClick={handleUploadPost}>Share</button>}
                            </Head>
                            {!imageSrc ? (
                                <Selection>
                                    <HiOutlinePhoto size={"80px"} />
                                    <p>Drag photos here</p>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        accept="image/jpeg,image/png"
                                        onChange={handleUploadFile}
                                    />
                                    <button onClick={triggerFileInput}>Select From Computer</button>
                                </Selection>
                            ) : (
                                <Photo src={imageSrc!} alt="" />
                            )}
                            {postCreatorPopUpIsOpen && (
                                <ModalWrapper>
                                    <ModalSubstrate onClick={handleClosePopUp} />
                                    <PopUp>
                                        <div>
                                            <h2>Discard post?</h2>
                                            <p>If you leave, your photo won't be saved</p>
                                        </div>
                                        <Discard onClick={handleCloseModal}>Discard</Discard>
                                        <button onClick={handleClosePopUp}>Cancel</button>
                                    </PopUp>
                                </ModalWrapper>
                            )}
                        </Content>
                    </Modal>
                    <CloseButton onClick={imageSrc ? handleOpenPopUp : handleCloseModal}>
                        <IoClose size={"45px"} />
                    </CloseButton>
                </ModalWrapper>
            )}
        </div>
    );
};

export default Post;
