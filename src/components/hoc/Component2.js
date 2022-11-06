import React, { Component } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import ColoredComponent from '../../common/withbgColor';

class Component2 extends Component {
  render() {
    const { bgcolor, changeColor } = this.props;
    return (
      <Box>
        <Card sx={{bgcolor: `${bgcolor}`}}>
            <CardHeader 
                title='Component 2'
                titleTypographyProps={{variant:'h3' }}
                style={{ textAlign: 'center' }}
            />
            <CardContent>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Mauris in aliquam sem fringilla ut. Consectetur purus ut faucibus pulvinar elementum integer enim. Ac odio tempor orci dapibus ultrices in iaculis nunc. A arcu cursus vitae congue mauris. Vitae justo eget magna fermentum iaculis. Auctor elit sed vulputate mi sit. Vulputate sapien nec sagittis aliquam. Feugiat nisl pretium fusce id velit ut tortor. Sit amet consectetur adipiscing elit duis tristique.
                </Typography>
            </CardContent>
            <CardActions>
                <Button type='button' onClick={changeColor} variant='contained' color='primary'>Change BG Color</Button>
            </CardActions>
        </Card>
      </Box>
    )
  }
}

export default ColoredComponent(Component2)