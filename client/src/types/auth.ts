export interface IAuth {
    credentials: ILogin | ISignUp | null;
    message: string;
    success: boolean;
}
export interface ILogin {
    type: string;
    username: string;
    password: string;
}

export interface ISignUp {
    type: string;
    username: string;
    password: string;
    passwordConfirm: string;
    email: string;
}
