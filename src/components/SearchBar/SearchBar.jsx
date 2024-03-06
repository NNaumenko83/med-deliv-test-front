import { TextField } from '@mui/material';

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

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
        <div>
            SearchBar
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
        </div>
    );
}

export default SearchBar;
