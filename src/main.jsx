import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { useOrder } from '../../hooks/contextOrder';
// import {
//     /* getShopsById */ getAddressByLocation,
// } from '../../services/apiBackend';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './redux/store';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { useLoadScript } from '@react-google-maps/api';
// import { GOOGLE_MAPS_API_KEY } from './constant/googleKeys';

// const libraries = ['places'];
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const queryClient = new QueryClient();

// const AppWithLoadScript = () => {
//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: GOOGLE_MAPS_API_KEY,
//         libraries: libraries,
//     });

//     if (loadError) return <div>Error loading maps</div>;
//     if (!isLoaded) return <div>Loading maps</div>;

//     return (
//         <React.StrictMode>
//             <Provider store={store}>
//                 <PersistGate loading={null} persistor={persistor}>
//                     <QueryClientProvider client={queryClient}>
//                         <BrowserRouter>
//                             <App />
//                         </BrowserRouter>
//                         <ReactQueryDevtools initialIsOpen={false} />
//                     </QueryClientProvider>
//                 </PersistGate>
//             </Provider>
//         </React.StrictMode>
//     );
// };

// root.render(<AppWithLoadScript />);
