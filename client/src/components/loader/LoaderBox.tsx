import { ThreeDots } from "react-loader-spinner";
import { useAppSelector } from "../../redux/hooks/reduxHooks";

interface LoaderBoxProps {
    children: React.ReactElement;
}

const LoaderBox: React.FC<LoaderBoxProps> = ({ children }) => {
    const isLoading = useAppSelector((state) => state.loader.isLoading);

    return isLoading ? (
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    ) : (
        children
    );
};

export default LoaderBox;
