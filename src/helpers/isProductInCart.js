export const isProductInCart = (products, id) => {
    return products.findIndex(product => id === product.id) < 0 ? false : true;
};
