import { api } from "../api/api";
import { useState } from "react";

interface LoginFormData
{
    username: string;
    password: string;
}

interface RegisterFormData
{
    username: string;
    email: string;
    fullname: string;
    avatar: string;
    password: string;
}


export const useLogin = ()=>
{

    const [error, setError]=useState<string | null>(null);

    const login = async (data: LoginFormData)=>
    {
        try
        {
            const response:any = await api.post('users/login', data);
            console.log(`Response is ${JSON.stringify(response)}`);
            
            return response;
        }catch(error: any)
        {
            setError(error.message);
            throw error;
        }
    }


    return {login, error};

}



export const useLogout = () =>
{
    const [error, setError]=useState<string | null>(null);

    const logout = async ()=>
    {
        try {
            await api.post('users/logout',{});
        } catch (error: any) {
            setError(error.message);
        }
    }


    return {logout, error};
}