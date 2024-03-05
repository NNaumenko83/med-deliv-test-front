import Container from '../../components/Container/Container';
import { ContentWrapper, StyledLink, Title } from './Home.styled';

const Home = () => {
    return (
        <Container>
            <ContentWrapper>
                <Title>Welcome! Select a pharmacy and place your order.</Title>
                <StyledLink to="/shops">Explore our pharmacies now!</StyledLink>
            </ContentWrapper>
        </Container>
    );
};
export default Home;
