import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NavBar from '../NavBar/NavBar';
import MedicationIcon from '@mui/icons-material/Medication';
import { LinkStyled } from './Header.styled';
import Container from '../Container/Container';

export function Header() {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar disableGutters>
                    <LinkStyled to="/">
                        <MedicationIcon
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        />
                        PHARMA POINT
                    </LinkStyled>

                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <NavBar />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
