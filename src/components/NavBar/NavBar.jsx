import { NavBarStyled, NavLinkStyled } from './NavBar.styled';

const NavBar = () => {
    return (
        <NavBarStyled>
            <NavLinkStyled to="/shops">PHARMACIES</NavLinkStyled>
            <NavLinkStyled to="/cart">CART</NavLinkStyled>
            <NavLinkStyled to="/history">HISTORY</NavLinkStyled>
            <NavLinkStyled to="/coupons"> COUPONS</NavLinkStyled>
        </NavBarStyled>
    );
};

export default NavBar;
