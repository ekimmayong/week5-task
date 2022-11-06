import React from 'react';
import AdvanceComponent1 from './advance/AdvanceComponent1';
import { Grid } from '@mui/material';

const Advance = () => {
  return (
    <Grid container rowGap={2}>
        <Grid item xs={12}>
            <AdvanceComponent1 />
        </Grid>
    </Grid>
  )
}

export default Advance