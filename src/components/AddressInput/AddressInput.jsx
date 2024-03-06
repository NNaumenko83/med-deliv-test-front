/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { AddressContext } from '../../pages/ShoppingCart/ShoppingCart';
import {
    InputAutocomplete,
    InputWrapper,
    SuggestionsItem,
    SuggestionsList,
} from './AddressInput.styled';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const AddressInput = ({ addressError }) => {
    const { setAddressBuyer, locationBuyer, setLocationBuyer } =
        useContext(AddressContext);
    const [inputValue, setInputValue] = useState('');
    const {
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();

    useEffect(() => {
        if (locationBuyer && locationBuyer.lat && locationBuyer.lng) {
            getGeocode({
                location: { lat: locationBuyer.lat, lng: locationBuyer.lng },
            })
                .then(results => {
                    const { formatted_address } = results[0];
                    setInputValue(formatted_address);
                    setAddressBuyer(formatted_address);
                })
                .catch(error => {
                    toast.error('Error fetching address', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationBuyer]);

    const ref = useOnclickOutside(() => {
        clearSuggestions();
        if (inputValue === '') {
            setLocationBuyer(null);
        }
    });

    const handleInput = e => {
        setInputValue(e.target.value);
        setValue(e.target.value);
    };

    const handlePlaceSelect = ({ description }) => {
        setInputValue(description);
        setValue(description, false);
        clearSuggestions();

        getGeocode({ address: description }).then(results => {
            const { lat, lng } = getLatLng(results[0]);

            setLocationBuyer({ lat, lng });
        });
    };

    const renderSuggestions = () =>
        data.map(suggestion => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <SuggestionsItem
                    key={place_id}
                    onClick={() => handlePlaceSelect(suggestion)}
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </SuggestionsItem>
            );
        });

    return (
        <InputWrapper ref={ref}>
            <TextField
                value={inputValue}
                onChange={handleInput}
                placeholder="Where are you going?"
                error={addressError}
                label="Address"
                sx={{ width: '100%' }}
            />
            {status === 'OK' && (
                <SuggestionsList>{renderSuggestions()}</SuggestionsList>
            )}
        </InputWrapper>
    );
};

AddressInput.propTypes = {
    addressError: PropTypes.bool.isRequired,
};
