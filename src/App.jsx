import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Shops from './pages/Shops/Shops';

// import { Container } from './App.styled';
// import { Bars } from 'react-loader-spinner';

import { SharedLayout } from './components/SharedLayout/SharedLayout';
import ShopProducts from './components/ShopProducts/ShopProducts';

const ShoppingCart = lazy(() => import('./pages/ShoppingCart/ShoppingCart'));

const Home = lazy(() => import('./pages/Home/Home'));
const History = lazy(() => import('./pages/Histoty/History'));
const Coupons = lazy(() => import('./pages/Coupons/Coupons'));

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="shops" element={<Shops />}>
                        <Route path=":shopName" element={<ShopProducts />} />
                    </Route>

                    <Route path="cart" element={<ShoppingCart />} />
                    <Route path="history" element={<History />} />
                    <Route path="coupons" element={<Coupons />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            <ToastContainer />
        </>
    );
}

export default App;
