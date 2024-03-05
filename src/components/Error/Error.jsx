import PropTypes from 'prop-types';

export const Error = ({ errorMessage }) => {
    return (
        <h1>
            Ooops!
            {errorMessage}
        </h1>
    );
};

Error.propTypes = {
    errorMessage: PropTypes.any,
};
