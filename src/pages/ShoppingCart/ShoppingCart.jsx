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

import { createContext, useRef, useState } from 'react';
import { CAPTHCA_KEY } from '../../constant/googleKeys';

export const AddressContext = createContext();

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);
    const [addressBuyer, setAddressBuyer] = useState('');
    const [locationBuyer, setLocationBuyer] = useState(null);
    const recaptchaRef = useRef(null);
    const [isPeople, setIsPeople] = useState(false);

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
                        <TextPrice>Total price: {total} UAH</TextPrice>
                    </PriceWrapper>
                    <CouponsWrapper>
                        <p>Coupons</p>
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
