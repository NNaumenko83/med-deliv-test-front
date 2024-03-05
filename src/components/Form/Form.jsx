import { useContext, useState } from 'react';
import { FormCart, StyledLabel, SubmitButton } from './Form.styled';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetProducts,
    selectProducts,
    selectTotalValue,
} from '../../redux/productsSlice';
import { Oval } from 'react-loader-spinner';
import { deleteShop, selectShop } from '../../redux/shopSlice';
import { sendOrder } from '../../services/ShopAPI';
import { AddressInput } from '../AddressInput/AddressInput';
import { AddressContext } from '../../pages/ShoppingCart/ShoppingCart';
import ErrorText from '../ErrorText/ErrorText';
import TextField from '@mui/material/TextField';

export const Form = () => {
    const dispatch = useDispatch();
    const selectedProducts = useSelector(selectProducts);
    const shop = useSelector(selectShop);
    const [isLoading, setIsLoading] = useState(false);
    const { isPeople, addressBuyer } = useContext(AddressContext);
    const total = useSelector(selectTotalValue);

    const initialState = { name: '', email: '', phone: '' };

    const [formData, setFormData] = useState(initialState);
    console.log('formData:', formData);

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setIsLoading(true);
            if (validateForm()) {
                await sendOrder({
                    ...formData,
                    shop,
                    products: [...selectedProducts],
                });
                setFormData(initialState);

                e.target.reset();

                toast.success(
                    'Thank you for your order. Our manager will call you as soon as possible.',
                    {
                        position: 'top-center',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    }
                );

                dispatch(deleteShop());
                dispatch(resetProducts());
            } else {
                toast.error('Fill all fields', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                return;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            formIsValid = false;
            newErrors.name = 'Name is required';
        } else if (newErrors.email) {
            newErrors.email = '';
        }

        const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!formData.email.trim()) {
            formIsValid = false;
            newErrors.email = 'Email is required';
        } else if (!emailRegExp.test(formData.email)) {
            formIsValid = false;
            newErrors.email = 'Invalid email address';
        }

        const phoneRegExp = /^\d{3} \d{3}-\d{2}-\d{2}$/;

        if (!formData.phone.trim()) {
            formIsValid = false;
            newErrors.phone = 'Phone is required';
        } else if (!phoneRegExp.test(formData.phone)) {
            formIsValid = false;
            newErrors.phone = 'Invalid phone number';
        }

        if (!addressBuyer.trim()) {
            formIsValid = false;
            newErrors.address = 'Address is required';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    return (
        <FormCart onSubmit={handleSubmit}>
            <StyledLabel>
                <AddressInput addressError={!!errors.address} />
            </StyledLabel>

            <StyledLabel>
                <TextField
                    type="text"
                    name="name"
                    onChange={handleChange}
                    label="Name"
                    error={!!errors.name}
                    sx={{ width: '100%' }}
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </StyledLabel>
            <StyledLabel>
                <TextField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    label="Email"
                    error={!!errors.email}
                    sx={{ width: '100%' }}
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </StyledLabel>
            <StyledLabel>
                <TextField
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    placeholder="XXX XXX-XX-XX"
                    label="Phone"
                    error={!!errors.phone}
                    sx={{ width: '100%' }}
                />
                {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </StyledLabel>

            <SubmitButton
                type="submit"
                disabled={!isPeople || total === 0}
                /*  disabled={selectedProducts.length === 0} */
            >
                {isLoading ? (
                    <Oval
                        height={20}
                        width={20}
                        color="#d74600"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                ) : (
                    <p>Confirm order</p>
                )}
            </SubmitButton>
        </FormCart>
    );
};
