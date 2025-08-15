import api from "../api/api";

const getProducts = async ({search, limit}: {search: string, limit?: number}) => {
    const response = await api.get(`/search?q=${search}&limit=${limit || 6}`);
    return response.data
}

export default getProducts