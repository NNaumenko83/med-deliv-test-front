import { Outlet, useNavigate, useParams } from 'react-router-dom';

import ShopList from '../../components/ShopList/ShopList';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';
import Container from '../../components/Container/Container';
import {
    ContentWrapper,
    ProductsListWrapper,
    ShopsListWrapper,
    Title,
    TitleWrapper,
} from './Shops.styled';
import { MutatingDots } from 'react-loader-spinner';

function Shops() {
    const navigate = useNavigate();
    const { shop } = useSelector(selectShop);
    const { shopName } = useParams();

    useEffect(() => {
        if (shop) {
            navigate(`/shops/${shop}`);
        }
    }, []);

    return (
        <Container>
            <ContentWrapper>
                <ShopsListWrapper>
                    <ShopList />
                </ShopsListWrapper>
                <ProductsListWrapper>
                    {!shopName && (
                        <TitleWrapper>
                            <Title>Choose a pharmacy</Title>
                        </TitleWrapper>
                    )}
                    <Suspense
                        fallback={
                            <MutatingDots
                                height={100}
                                width={100}
                                color="#1976d2"
                                secondaryColor="#1976d2"
                                radius={12.5}
                                ariaLabel="mutating-dots-loading"
                                visible={true}
                            />
                        }
                    >
                        <Outlet />
                    </Suspense>
                </ProductsListWrapper>
            </ContentWrapper>
        </Container>
    );
}

export default Shops;
