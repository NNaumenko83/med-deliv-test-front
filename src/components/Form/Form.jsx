import { useContext, useState } from 'react';
import {
    /* ErrorText,  */ FormCart,
    FormInput,
    SubmitButton,
} from './Form.styled';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { resetProducts, selectProducts } from '../../redux/productsSlice';
import { Oval } from 'react-loader-spinner';
import { deleteShop, selectShop } from '../../redux/shopSlice';
import { sendOrder } from '../../services/ShopAPI';
import { AddressInput } from '../AddressInput/AddressInput';
import { AddressContext } from '../../pages/ShoppingCart/ShoppingCart';

export const Form = () => {
    const dispatch = useDispatch();
    const selectedProducts = useSelector(selectProducts);
    const shop = useSelector(selectShop);
    const [isLoading, setIsLoading] = useState(false);
    const { isPeople } = useContext(AddressContext);

    const initialState = { name: '', email: '', phone: '', address: '' };

    const [formData, setFormData] = useState(initialState);

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

        if (!formData.adress.trim()) {
            formIsValid = false;
            newErrors.adress = 'Address is required';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    return (
        <FormCart onSubmit={handleSubmit}>
            <label>
                Address
                <AddressInput />
            </label>

            <label>
                Name:
                <FormInput type="text" name="name" onChange={handleChange} />
                {/* {errors.name && <ErrorText>{errors.name}</ErrorText>} */}
            </label>
            <label>
                Email:
                <FormInput type="email" name="email" onChange={handleChange} />
                {/* {errors.email && <ErrorText>{errors.email}</ErrorText>} */}
            </label>
            <label>
                Phone:
                <FormInput
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    placeholder="XXX XXX-XX-XX"
                />
                {/* {errors.phone && <ErrorText>{errors.phone}</ErrorText>} */}
            </label>

            <SubmitButton
                type="submit"
                disabled={!isPeople}
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
                    <p>Submit</p>
                )}
            </SubmitButton>
        </FormCart>
    );
};
