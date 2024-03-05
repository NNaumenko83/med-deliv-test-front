import React, { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Disabled, ProductsContainer, ShopsContainer } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';
import { Bars } from 'react-loader-spinner';

const Home = () => {
  const shop = useSelector(selectShop);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ShopsContainer>
        Shops:
        {shop === 'McDonalds' || shop === '' ? (
          <NavLink to="/mcdonalds">McDonalds</NavLink>
        ) : (
          <Disabled>McDonalds</Disabled>
        )}
        {shop === 'KFC' || shop === '' ? (
          <NavLink to="/kfc">KFC</NavLink>
        ) : (
          <Disabled>KFC</Disabled>
        )}
        {shop === 'Murakami' || shop === '' ? (
          <NavLink to="/murakami">Murakami</NavLink>
        ) : (
          <Disabled>Murakami</Disabled>
        )}
      </ShopsContainer>
      <ProductsContainer>
        {path === '/' && <h3>Choose a shop and make order</h3>}
        <Suspense
          fallback={
            <Bars
              height="40"
              width="40"
              color="#280232"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </ProductsContainer>
    </div>
  );
};

export default Home;
