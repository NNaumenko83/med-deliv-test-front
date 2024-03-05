import {
    CartContainer,
    CartProducts,
    CouponsWrapper,
    FormContainer,
    MapWrapper,
    PriceWrapper,
    TestWrapper,
    TextPrice,
} from './ShoppingCart.styled';
import { Form } from '../../components/Form/Form';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';
import { useSelector } from 'react-redux';
import { selectTotalValue } from '../../redux/productsSlice';
import ReCAPTCHA from 'react-google-recaptcha';
import { getCoupons } from '../../services/ShopAPI';
import { useQuery } from '@tanstack/react-query';

// {
//   "event": {
//     "token": "TOKEN",
//     "expectedAction": "USER_ACTION",
//     "siteKey": "6LfmkIkpAAAAACOTJD68YjPI5hw2IZRwpQvmsMYF",
//   }
// }
// https://recaptchaenterprise.googleapis.com/v1/projects/medicine-1709561944050/assessments?key=API_KEY

import Map from '../../components/Map/Map';
import Container from '../../components/Container/Container';

import { createContext, useEffect, useRef, useState } from 'react';
import { CAPTHCA_KEY } from '../../constant/googleKeys';
import { getDiscount } from '../../helpers/getDiscont';

export const AddressContext = createContext();

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);
    const [addressBuyer, setAddressBuyer] = useState('');
    const [locationBuyer, setLocationBuyer] = useState(null);
    const recaptchaRef = useRef(null);
    const [couponId, setCouponId] = useState('');
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
            setDiscount((total - (total * (100 - discount)) / 100).toFixed(2));
            setTotalWithDiscount(((total * (100 - discount)) / 100).toFixed(2));
        }
    }, [couponId, coupons, total]);

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
                            Price:
                            {total.toFixed(2)}
                            UAH
                        </TextPrice>
                        <TextPrice>Discount: {discount} UAH</TextPrice>
                        <TextPrice>
                            Total price:
                            {totalWithDiscount}
                            UAH
                        </TextPrice>
                    </PriceWrapper>
                    <CouponsWrapper>
                        <p>
                            <input
                                type="text"
                                value={couponId}
                                onChange={handlerInputCouponChange}
                                placeholder="coupone code"
                            />
                        </p>
                    </CouponsWrapper>
                    <TestWrapper>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={CAPTHCA_KEY}
                            onChange={handlerCaptcha}
                        />
                    </TestWrapper>
                </CartContainer>
            </Container>
        </AddressContext.Provider>
    );
};

export default ShoppingCart;
