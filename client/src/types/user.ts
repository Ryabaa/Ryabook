export interface IUserAccount {
    avatar: File;
    username: string;
    password: string;
    password_confirm: string;
    email: string;
}

export interface IUserProfile {
    firstName: string;
    lastNname: string;
    birtdayDate: number;
}
