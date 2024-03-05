import {
    FooterContainer,
    FooterStyled,
    FooterText,
    Link,
    LinkWrapper,
} from './Footer.styled';
import { ImLinkedin2, ImGithub } from 'react-icons/im';

export const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Link
                    href="https://github.com/NNaumenko83/nova-poshta-test-task"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    Go to repository
                </Link>
                <FooterText> Created by Mykola Naumenko </FooterText>
                <LinkWrapper>
                    <Link
                        href="https://www.linkedin.com/in/mykola--naumenko/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <ImLinkedin2 />
                    </Link>
                    <Link
                        href="https://github.com/NNaumenko83"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <ImGithub />
                    </Link>
                </LinkWrapper>

                <FooterText> 2024 </FooterText>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;
