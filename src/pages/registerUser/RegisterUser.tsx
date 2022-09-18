import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import './RegisterUser.css';
import { Link } from 'react-router-dom';

function RegisterUser() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='image'>

            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texts'> Registrar </Typography>
                        <TextField id='nome' label='Name' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='senha' label='Password' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <TextField id='confirmsenha' label='ConfirmPassword' variant='outlined' name='confirmsenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancel color'> Cancelar </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='btnRegister color'> Registrar </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterUser;