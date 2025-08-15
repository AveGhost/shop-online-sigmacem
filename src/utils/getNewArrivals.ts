import api from "../api/api";

const getNewArrivals = async () => {
    const response = await api.get(`/?limit=6&sortBy=createdAt&order=desc`);
    return response.data
}

export default getNewArrivals