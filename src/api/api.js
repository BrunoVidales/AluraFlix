import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
});

export const read = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error al leer las categorias');
        throw error;
    }
};

const API_URL = "http://localhost:3000/cards"

export const update = async (url) => {
    try {
        const response = await api.post(API_URL, url);
        return response.data;
    } catch (error) {
        console.log('Error al actualizar las cards');
        throw error;
    }
};

export const eliminate = async (id) => {
    try {
        const response = await api.delete(`/cards/${id}`); // Asegúrate de que la ruta sea correcta
        return response.data;
    } catch (error) {
        console.log('Error al eliminar', error);
        throw error;  // Maneja el error adecuadamente
    }
};