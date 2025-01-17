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

export const add = async (url) => {
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
        const response = await api.delete(`/cards/${id}`); 
        return response.data;
    } catch (error) {
        console.log('Error al eliminar', error);
        throw error;  
    }
};

export const update = async (id, updatedCard) => {
    try {
      const response = await api.put(`${API_URL}/${id}`, updatedCard); 
      return response.data;
    } catch (error) {
      console.log('Error al actualizar la tarjeta', error);
      throw error;
    }
  };