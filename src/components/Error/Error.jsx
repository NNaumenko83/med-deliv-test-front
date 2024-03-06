import PropTypes from 'prop-types';
import { ErrorMessage } from './Error.styled';

export const Error = ({ errorMessage }) => {
    return (
        <ErrorMessage>
            Ooops! Something went wrong...
            {errorMessage}
        </ErrorMessage>
    );
};

Error.propTypes = {
    errorMessage: PropTypes.any,
};
