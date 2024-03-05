import PropTypes from 'prop-types';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import MUIContainer from '@mui/material/Container';

export default function Container({ children }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <MUIContainer maxWidth="xl" fixed>
                {children}
            </MUIContainer>
        </React.Fragment>
    );
}
Container.propTypes = {
    children: PropTypes.node.isRequired,
};
