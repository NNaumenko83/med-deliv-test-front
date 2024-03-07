import { Outlet, useNavigate, useParams } from 'react-router-dom';

import ShopList from '../../components/ShopList/ShopList';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';
import Container from '../../components/Container/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
    ContentWrapper,
    ProductsListWrapper,
    ShopsListWrapper,
    SortWrapper,
    Test,
    Title,
    TitleWrapper,
} from './Shops.styled';
import { MutatingDots } from 'react-loader-spinner';
import Typography from '@mui/material/Typography';

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
                <Test>
                    <FormControl sx={{ width: '100%' }}>
                        <SortWrapper>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#000000',
                                        fontSize: '18px',
                                    }}
                                >
                                    Sort by:
                                </Typography>
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="date"
                                    control={<Radio />}
                                    label="Date"
                                />
                                <FormControlLabel
                                    value="Price"
                                    control={<Radio />}
                                    label="Price"
                                />
                            </RadioGroup>
                        </SortWrapper>
                    </FormControl>
                </Test>

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
