import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
});

export const read = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('error al leer las categorias')
        throw error;
    }
};
