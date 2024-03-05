import { useContext, useEffect, useState } from 'react';
import {
    GoogleMap,
    Marker,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';

import { setDefaults, fromAddress } from 'react-geocode';

import { useGeolocated } from 'react-geolocated';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';
import { useQuery } from '@tanstack/react-query';
import { getShopAddress } from '../../services/ShopAPI';
import { GOOGLE_MAPS_API_KEY } from '../../constant/googleKeys';
import { AddressContext } from '../../pages/ShoppingCart/ShoppingCart';

setDefaults({
    key: GOOGLE_MAPS_API_KEY,
    language: 'en',
});

const Map = () => {
    const [response, setResponse] = useState(null);
    const shop = useSelector(selectShop);
    console.log('shop:', shop);
    const [directionsKey, setDirectionsKey] = useState(0);
    const [locationStore, setLocationStore] = useState();

    const { locationBuyer, setLocationBuyer } = useContext(AddressContext);

    const { data: { address: addressShop } = {} } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const data = await getShopAddress(shop.shop);

            return data;
        },
        staleTime: 6000,
    });

    useEffect(() => {
        if (addressShop) {
            fromAddress(addressShop).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    setLocationStore({ lat, lng });
                },
                error => {
                    console.error(error);
                }
            );
        }
    }, [addressShop]);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        if (isGeolocationAvailable && isGeolocationEnabled && coords) {
            setLocationBuyer({
                lat: coords.latitude,
                lng: coords.longitude,
            });
        }
    }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

    useEffect(() => {
        if (locationBuyer && locationStore) {
            setResponse(null);
            setDirectionsKey(prevKey => prevKey + 1);
            console.log('Response cleared:', response);
        }
    }, [locationBuyer, locationStore]);

    useEffect(() => {
        if (!locationBuyer && coords) {
            setLocationBuyer({
                lat: coords.latitude,
                lng: coords.longitude,
            });
            setResponse(null);
        }
    }, [locationBuyer]);

    const directionsCallback = response => {
        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response);
            }
        }
    };

    // eslint-disable-next-line no-unused-vars
    const onLoad = marker => {};

    const onClick = e => {
        console.log('Click detected!');
        if (e.latLng?.lat() && e.latLng?.lng()) {
            setLocationBuyer({
                lat: e.latLng?.lat(),
                lng: e.latLng?.lng(),
            });
            setResponse(null);
            setDirectionsKey(prevKey => prevKey + 1);
            console.log('Response cleared:', response);
        }
    };

    if (!shop.shop) {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    center={locationBuyer}
                    zoom={13}
                    onClick={onClick}
                >
                    {locationBuyer && (
                        <Marker onLoad={onLoad} position={locationBuyer} />
                    )}
                </GoogleMap>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                center={locationStore}
                zoom={13}
                onClick={onClick}
            >
                {locationBuyer && (
                    <Marker onLoad={onLoad} position={locationBuyer} />
                )}

                {locationStore && (
                    <Marker onLoad={onLoad} position={locationStore} />
                )}

                {!response && locationStore && locationBuyer && (
                    <DirectionsService
                        options={{
                            destination: locationStore,
                            origin: locationBuyer,

                            travelMode: 'WALKING',
                        }}
                        callback={directionsCallback}
                    />
                )}
                {response && locationStore && locationBuyer && (
                    <DirectionsRenderer
                        key={directionsKey}
                        options={{
                            directions: response,
                        }}
                        routeIndex={0}
                    />
                )}
                {!response && (
                    <DirectionsRenderer
                        key={directionsKey}
                        options={{
                            directions: { routes: [] },
                        }}
                        routeIndex={0}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;
