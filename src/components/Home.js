import React from 'react';
import { Container, Grid } from '@mui/material';
import Component1 from './hoc/Component1';
import Component2 from './hoc/Component2';

const Home = () => {
  return (
    <Grid container rowGap={2}>
        <Grid item xs={12}>
            <Component1 />
        </Grid>
        <Grid item xs={12}>
            <Component2 />
        </Grid>
    </Grid>
  )
}

export default Home