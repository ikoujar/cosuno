import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AppContext } from '../../contexts/app.context';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Logo = styled('img')(({ theme }) => ({
    height: 30,
    fill: 'white'
}));


export default function SearchAppBar() {
    const { setDarkMode, darkMode, setSearch, search } = React.useContext(AppContext);
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <Logo src={'/logo.svg'} />
                    <Box sx={{ flexGrow: 1, mx: 1 }} />
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {
                            darkMode ? <DarkModeOutlined /> : <LightModeOutlined sx={{ color: 'white' }} />
                        }
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
