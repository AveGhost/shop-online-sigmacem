import api from "../api/api";

const getFeaturedProducts = async () => {
    const response = await api.get(`/?limit=6&sortBy=rating&order=desc`);
    return response.data;
};

export default getFeaturedProducts