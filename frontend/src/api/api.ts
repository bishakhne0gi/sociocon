import axios from "axios";


export const api =
{
    post: async <T>(url: string, data: any): Promise<T> => {

        const { data: body } = await axios.post(`/${url}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (body.statusCode !== 200) {
            throw new Error(`Http error: ${body.status}`);
        }


        return body;
    }
}