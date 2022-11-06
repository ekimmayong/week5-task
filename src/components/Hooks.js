import React from 'react';
import { Grid } from '@mui/material';
import HooksComponent1 from './hooks/hooksComponent1';
import HooksComponent2 from './hooks/HooksComponent2';

const Hooks = () => {
  return (
    <Grid container rowGap={2}>
      <Grid item xs={12}>
        <HooksComponent1 />
      </Grid>
      <Grid item xs={12}>
        <HooksComponent2 />
      </Grid>
    </Grid>
  )
}

export default Hooks