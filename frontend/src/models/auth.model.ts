export interface LoginFormData {
    username: string;
    password: string;
}

export interface RegisterFormData {
    username: string;
    email: string;
    fullname: string;
    avatar: File | null;
    coverImage: File | null;
    password: string;
}