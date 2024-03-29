import axios from 'axios';

const BASE_URL = 'https://med-deliv-test-back.onrender.com/api/';
// const BASE_URL = 'http://localhost:5000/api/';

const productsApi = axios.create({
    baseURL: BASE_URL,
});

export const getProducts = async (shopId, search) => {
    const response = await productsApi(`/products/by-shop/${shopId}${search}`);

    return response.data;
};

export const sendOrder = async body => {
    await productsApi.post('/orders', body);
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

export const getCoupons = async () => {
    const response = await productsApi.get('/coupons');
    return response.data;
};

export const getOrderById = async id => {
    const response = await productsApi.get(`/orders/${id}`);
    return response.data;
};

export const getOrders = async (email = '', phone = '') => {
    let queryString = '/orders';

    if (email) {
        queryString += `?email=${email}`;
    }
    if (phone) {
        const phoneNumberDigits = phone.replace(/\D/g, '');
        queryString +=
            (queryString.includes('?') ? '&' : '?') +
            `phone=${phoneNumberDigits}`;
    }

    if (!email && !phone) {
        queryString = '/orders';
    }

    const response = await productsApi.get(queryString);

    return response.data;
};

export const updFavorite = async ({ id, favorite }) => {
    await productsApi.patch(`/products/${id}/favorite`, { favorite });
    return;
};
