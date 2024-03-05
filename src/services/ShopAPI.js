import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const productsApi = axios.create({
    baseURL: BASE_URL,
});

export const getProducts = async shopId => {
    const response = await productsApi(`/products/by-shop/${shopId}`);
    console.log('response:', response);
    return response.data;
};

export const sendOrder = async body => {
    const response = await productsApi.post('/orders', body);
    console.log('response:', response);

    return;
};

export const getShops = async () => {
    const response = await productsApi.get('/shops');
    return response.data;
};
export const getShopAddress = async id => {
    const response = await productsApi.get(`/shops/${id}`);
    return response.data;
};
