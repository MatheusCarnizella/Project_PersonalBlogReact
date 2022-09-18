import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems='center' item xs={12}>
                    <Box className='box1 color'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='texts' > Siga nas redes socias! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href='https://www.facebook.com' target="_blank">
                                <FacebookIcon className='socialMedia' />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <LinkedInIcon className='socialMedia' />
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <InstagramIcon className='socialMedia' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2 color2'>
                        <Box paddingTop={1}>
                            <Typography variant='subtitle2' align='center' gutterBottom className='texts'> Copyright © 2022 </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle2' align='center' gutterBottom className='texts'> Direitos reservados - Matheus Carnizella </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;