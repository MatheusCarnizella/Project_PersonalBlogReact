import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar className='color' position='static'>
                <Toolbar variant='dense'>

                    <Box className='cursor' mx={1}>
                        <Typography variant='h4' color='inherit'>
                            M-Voiidde Blog
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Home
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Posts
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Temas
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Registrar Temas
                            </Typography>
                        </Box>
                    </Box>

                    <Link to='/login' className='text-decorator-none canto'>
                        <Box display="flex" justifyContent="start">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color='inherit'>
                                    Logout
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;