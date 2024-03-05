import PropTypes from 'prop-types';
import { StyledErrorText } from './ErrorText.styled';

function ErrorText({ children }) {
    return <StyledErrorText>{children}</StyledErrorText>;
}

ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorText;
