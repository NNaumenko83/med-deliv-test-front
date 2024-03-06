import Container from '../../components/Container/Container';
import { ErrorWrapper } from './NotFound.styled';

const NotFound = () => {
    return (
        <Container>
            <ErrorWrapper>404 Page not found!</ErrorWrapper>
        </Container>
    );
};

export default NotFound;
