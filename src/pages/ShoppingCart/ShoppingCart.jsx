import {
    CartContainer,
    CartProducts,
    CouponsWrapper,
    FormContainer,
    MapWrapper,
    PriceWrapper,
    TestWrapper,
    TextPrice,
    TotalPrice,
} from './ShoppingCart.styled';
import { Form } from '../../components/Form/Form';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';
import { useSelector } from 'react-redux';
import { selectTotalValue } from '../../redux/productsSlice';
import ReCAPTCHA from 'react-google-recaptcha';
import { getCoupons } from '../../services/ShopAPI';
import { useQuery } from '@tanstack/react-query';

import Map from '../../components/Map/Map';
import Container from '../../components/Container/Container';

import { createContext, useEffect, useRef, useState } from 'react';
import { getDiscount } from '../../helpers/getDiscont';
import { TextField } from '@mui/material';

export const AddressContext = createContext();

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);
    const [addressBuyer, setAddressBuyer] = useState('');
    const [locationBuyer, setLocationBuyer] = useState(null);
    const recaptchaRef = useRef(null);
    const [couponId, setCouponId] = useState(null);

    const [isPeople, setIsPeople] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [totalWithDiscount, setTotalWithDiscount] = useState(0);

    const { data: coupons } = useQuery({
        queryKey: ['coupons'],
        queryFn: getCoupons,
        staleTime: 60000,
    });

    const handlerInputCouponChange = e => {
        setCouponId(e.target.value);
    };

    useEffect(() => {
        if (couponId) {
            const discount = getDiscount(coupons, couponId);
            setDiscount(total - (total * (100 - discount)) / 100);
            setTotalWithDiscount((total * (100 - discount)) / 100);
            return;
        }
        setDiscount(0);
        setTotalWithDiscount((total * (100 - discount)) / 100);
    }, [couponId, coupons, discount, total]);

    function handlerCaptcha(value) {
        setIsPeople(!!value);
    }

    return (
        <AddressContext.Provider
            value={{
                addressBuyer,
                setAddressBuyer,
                locationBuyer,
                setLocationBuyer,
                isPeople,
                setIsPeople,
                couponId,
                discount,
                totalWithDiscount,
                setCouponId,
            }}
        >
            <Container>
                <CartContainer>
                    <MapWrapper>
                        <Map />
                    </MapWrapper>
                    <FormContainer>
                        <Form />
                    </FormContainer>

                    <CartProducts>
                        <CartProductsList />
                    </CartProducts>
                    <PriceWrapper>
                        <TextPrice>
                            <span>Price:</span>
                            <span>{total.toFixed(2)}</span>
                            <span>UAH</span>
                        </TextPrice>
                        <TextPrice>
                            <span> Discount:</span>
                            <span>{discount.toFixed(2)}</span>
                            <span> UAH</span>
                        </TextPrice>
                        <TextPrice>
                            <TotalPrice>Total price:</TotalPrice>
                            <TotalPrice>
                                {totalWithDiscount
                                    ? totalWithDiscount.toFixed(2)
                                    : total.toFixed(2)}
                            </TotalPrice>
                            <TotalPrice> UAH</TotalPrice>
                        </TextPrice>
                    </PriceWrapper>
                    <CouponsWrapper>
                        <TextField
                            type="text"
                            value={couponId ? couponId : ''}
                            onChange={handlerInputCouponChange}
                            placeholder="coupon code"
                            label="Coupon Code"
                        />
                    </CouponsWrapper>
                    <TestWrapper>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_CAPTHCA_KEY}
                            onChange={handlerCaptcha}
                        />
                    </TestWrapper>
                </CartContainer>
            </Container>
        </AddressContext.Provider>
    );
};

export default ShoppingCart;
