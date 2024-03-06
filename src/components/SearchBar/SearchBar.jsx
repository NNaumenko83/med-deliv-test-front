import { TextField } from '@mui/material';

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledSearchBar } from './SearchBar.styled';

function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );

    const handleInputChange = e => {
        setSearchParams({ ...params, [e.target.name]: e.target.value });
    };

    return (
        <StyledSearchBar>
            <TextField
                type="email"
                name="email"
                onChange={handleInputChange}
                label="Email"
                sx={{ width: '100%' }}
            />
            <TextField
                type="tel"
                name="phone"
                onChange={handleInputChange}
                label="Phone"
                sx={{ width: '100%' }}
            />
        </StyledSearchBar>
    );
}

export default SearchBar;
