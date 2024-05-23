import { FC, FormEvent, useCallback, useState } from "react";

import StyledForm from "./form-style";
import Container from "../../styles/container";

import Input from "./Input";

export interface IField {
    key: string;
    value: string;
    type: string;
}

interface IForm {
    formSubmit: (data: any) => void;
    fields: IField[];
    submitName: string;
}

const Form: FC<IForm> = ({ formSubmit, fields, submitName }) => {
    const [data, setData] = useState({});

    const editData = useCallback(
        (key: string, value: string) => {
            setData({ ...data, [key]: value });
        },
        [data]
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        formSubmit(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Container direction="column" row="5px" background="none">
                {fields
                    .filter((field) => field.key === "avatar")
                    .map((field, index) => (
                        <Input field={field} editData={editData} />
                    ))}
                {fields
                    .filter((field) => field.key !== "avatar")
                    .map((field, index) => (
                        <Container
                            background="#cfd0d11a"
                            position="relative"
                            align="center"
                            width="300px"
                            key={index}>
                            <label>{field.value} </label>
                            <Input field={field} editData={editData} />
                        </Container>
                    ))}
            </Container>
            <input type="submit" value={submitName} />
        </StyledForm>
    );
};

export default Form;
