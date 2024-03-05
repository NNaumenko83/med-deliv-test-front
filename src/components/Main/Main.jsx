import MainStyled from './Main.styled';
import PropTypes from 'prop-types';

function Main({ children }) {
    return <MainStyled>{children}</MainStyled>;
}

export default Main;

Main.propTypes = {
    children: PropTypes.node.isRequired,
};
