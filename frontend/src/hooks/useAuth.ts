import { LoginFormData, RegisterFormData } from "@/models/auth.model";
import { api } from "../api/api";
import { useState } from "react";


export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);

    const login = async (data: LoginFormData) => {
        try {
            const response: any = await api.post('users/login', data);

            return response;
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }

    return { login, error };
}


export const useLogout = () => {
    const [error, setError] = useState<string | null>(null);

    const logout = async () => {
        try {
            await api.post('users/logout', {});
        } catch (error: any) {
            setError(error.message);
        }
    }

    return { logout, error };
}


export const useRegister = () => {
    const [error, setError] = useState<string | null>(null);

    const register = async (data: RegisterFormData) => {
        try {
            const response: any = await api.post('users/register', data);
            return response;
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }

    return { register, error };
}