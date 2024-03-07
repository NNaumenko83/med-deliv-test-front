import { useDispatch, useSelector } from 'react-redux';
import {
    AddButton,
    Card,
    DeleteButton,
    DrugName,
    FavoriteButton,
    FavoriteIcon,
    Image,
    ImageWrapper,
    InfoWrapper,
} from './ProductCard.styled';
import {
    addProduct,
    deleteProduct,
    selectProducts,
} from '../../redux/productsSlice';
import { toast } from 'react-toastify';
import { addShop, selectShop } from '../../redux/shopSlice';

import imagePlaceholder from '../../images/placeholder-image.jpeg';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { isProductInCart } from '../../helpers/isProductInCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updFavorite } from '../../services/ShopAPI';
import { useState } from 'react';

export const ProductCard = ({ name, img, price, id, currency, favorite }) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { shopName } = useParams();
    const { shop } = useSelector(selectShop);
    const products = useSelector(selectProducts);
    const [isLoading, setIsLoading] = useState(false);

    const selectedProducts = useSelector(selectProducts);

    const updFavoriteMutate = useMutation({
        mutationFn: updFavorite,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products', shopName] });
            setIsLoading(false);
        },
        onError: () => {
            toast.error('Something went wrong', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setIsLoading(false);
        },
    });

    const handleButtonClick = () => {
        if (!!shop && shop !== shopName) {
            toast.error(
                'Attention: Please ensure that all items in your basket are from a single pharmacy.',
                {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                }
            );
            return;
        }
        if (selectedProducts.length === 0) {
            dispatch(addShop(shopName));
        }

        dispatch(addProduct({ name, img, price, id }));

        toast.success('Product is added', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleImageError = event => {
        event.target.src = imagePlaceholder;
    };

    const handleButtonDeleteClick = () => {
        dispatch(deleteProduct(id));
        toast.warn('Product was deleted from cart', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleFavoriteButtonClick = async () => {
        await updFavoriteMutate.mutate({ id, favorite: !favorite });
    };

    return (
        <Card>
            <ImageWrapper>
                <Image
                    src={img}
                    alt={name}
                    width="100px"
                    onError={handleImageError}
                />
            </ImageWrapper>
            <InfoWrapper>
                <DrugName>{name}</DrugName>
                <p>
                    {price.toFixed(2)} {currency}
                </p>
            </InfoWrapper>
            {isProductInCart(products, id) ? (
                <DeleteButton type="button" onClick={handleButtonDeleteClick}>
                    Delete from Cart
                </DeleteButton>
            ) : (
                <AddButton type="button" onClick={handleButtonClick}>
                    Add to Cart
                </AddButton>
            )}
            <FavoriteButton
                onClick={handleFavoriteButtonClick}
                favorite={favorite}
                disabled={isLoading}
            >
                <FavoriteIcon />
            </FavoriteButton>
        </Card>
    );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
};
