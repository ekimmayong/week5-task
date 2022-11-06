import React, { Component } from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton,  Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import QrCode2Icon from '@mui/icons-material/QrCode2';

class Navbar extends Component {

    state ={ 
        anchorElNav: null,
        anchorElUser: null
    }


    handleOpenNavMenu = (event) => {
        this.setState({
            anchorElNav:event.currentTarget
        })
    };

    handleOpenUserMenu = (event) => {
        this.setState({
            anchorElUser: event.currentTarget
        })
    };

    handleCloseNavMenu = () => {
        this.setState({
            anchorElNav: null
        })
    };

    handleCloseUserMenu = () => {
        this.setState({
            anchorElUser: null
        })
    };
    render(){
        const navItems = [
            {id: 1, menu: 'Home', linkto: '/home' },
            {id: 2, menu: 'Hooks', linkto: '/hooks' },
            {id: 3, menu: 'Advance', linkto: '/advance' }
        ];
        const settings = [ 'Signup'];
        return (
            <Box sx={{mb: 2}}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                        <QrCode2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            APP
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(this.state.anchorElNav)}
                            onClose={this.handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {navItems.map((page) => (
                                <MenuItem key={page.id} onClick={this.handleCloseNavMenu}>\
                                    <Link to={page.linkto} style={{textDecoration: 'none'}}>
                                        <Typography textAlign="center">{page.menu}</Typography>
                                    </Link>
                                </MenuItem>
                                
                            ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((page) => (
                                <React.Fragment key={page.id}>
                                    <Link to={page.linkto} style={{textDecoration: 'none'}}>
                                        <Button
                                            key={page.id}
                                            onClick={this.handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.menu}
                                        </Button>
                                    </Link>
                                </React.Fragment>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="A" src="" />
                            </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={this.anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorElUser)}
                            onClose={this.handleCloseUserMenu}
                            >
                            { settings.map((setting) => (
                                    <MenuItem key={setting} onClick={this.handleCloseUserMenu}>\
                                        <Link to='/signup' style={{textDecoration: 'none'}}>
                                                <Typography textAlign="center">{setting}</Typography>
                                        </Link>
                                    </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        </Toolbar>
                    </Container>
                    </AppBar>
            </Box>
        )
    }
}

export default Navbar