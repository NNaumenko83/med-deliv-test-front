import axios from 'axios';

const BASE_URL = 'https://food-delivery-mnv-back.onrender.com/api';

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = async pathname => {
  const updatedPath = pathname.replace('/', '');

  const response = await productsApi(`shops/${updatedPath}`);
  return response.data.data;
};

export const sendOrder = async body => {
  const response = await productsApi.post('/orders', body);
  console.log('response:', response);

  return;
};
