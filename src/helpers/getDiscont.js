export const getDiscount = (coupons, id) => {
    const index = coupons.findIndex(coupon => {
        return coupon.id === id;
    });

    if (index < 0) return 0;
    return coupons[index].discount;
};
