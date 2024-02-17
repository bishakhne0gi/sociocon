import axios from "axios";


export const api=
{
    post: async <T>(url: string, data: any): Promise<T> => {


        const {data:body}= await axios.post(`/${url}`, JSON.stringify(data), {
            // headers: {
            //     'Access-Control-Allow-Origin': "*",
            // },
            withCredentials: true,
        })

        if (body.status!==200) {
            throw new Error(`Http error: ${body.status}`);
        }
     
        
        return body;
    },
}