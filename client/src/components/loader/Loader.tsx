import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader: FC = () => {
    return (
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#464577"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};

export default Loader;
