import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { Bars } from 'react-loader-spinner';

const ShoppingCart = lazy(() => import('./pages/ShoppingCart/ShoppingCart'));

const Home = lazy(() => import('./pages/Home/Home'));

const McDonaldsProducts = lazy(() =>
  import('./components/Shops/McDonaldsProducts/McDonaldsProducts')
);
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const KfcProducts = lazy(() =>
  import('./components/Shops/KfcProducts/KfcProducts')
);
const MurakamiProducts = lazy(() =>
  import('./components/Shops/MurakamiProducts/MurakamiProducts')
);

function App() {
  return (
    <Container>
      <header style={{ height: '100px', padding: '10px' }}>
        <h1>Food delivery</h1>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <NavLink
            to="/"
            style={{ paddingRight: '10px', borderRight: '1px solid black' }}
          >
            Shop
          </NavLink>
          <NavLink to="/cart">Shoping Cart</NavLink>
        </nav>
      </header>

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
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="mcdonalds" element={<McDonaldsProducts />} />
            <Route path="kfc" element={<KfcProducts />} />
            <Route path="murakami" element={<MurakamiProducts />} />
          </Route>

          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}

export default App;
