import { ChangeEvent, FC, FocusEvent, useState } from "react";

export interface IField {
    key: string;
    value: string;
    type: string;
}

interface IInput {
    field: IField;
    editData: (key: string, value: any) => void;
}

const Input: FC<IInput> = ({ field, editData }) => {
    const [active, setActive] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        editData(field.key, event.target.value);
    };

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
        setActive(true);
    };

    return <input type={field.type} onChange={handleInputChange} onFocus={handleInputFocus} />;
};

export default Input;
