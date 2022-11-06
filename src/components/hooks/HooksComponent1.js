import React, { useState} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';

const HooksComponent1 = () => {
  const [fruit, setFruit ] = useState([{id: 1, fruit: "Apple"}, {id: 2, fruit: "Orange"}, {id: 3, fruit: "Atis"}, {id: 4, fruit: "Guava"}, {id: 5, fruit: "Mango"}, {id: 6, fruit: "Grapes"}])

  const handleUpdate=()=> {
    const updateState = fruit.map(item => {
      if(item.id === 2){
        return {
          ...item,
            fruit: 'Watermelon',
        }
      }
      return item
    })

    setFruit(updateState);
  }
  return (
    <Box>
      <Card>
        <CardHeader
          title='Update 2nd index'
          titleTypographyProps={{variant:'h5' }}
          style={{ textAlign: 'center' }}
        />
        <CardContent>
          <List>
            {
              fruit.map((item,i) => {
                return (
                  <React.Fragment key={item.id}>
                    <ListItem sx={{borderBottom: '1px solid #cdcdcd'}}>
                      <ListItemText primary={item.fruit} secondary='Fruit'/>
                    </ListItem>
                  </React.Fragment>
                )
              })
            }
            
          </List>
        </CardContent>
        <CardActions>
          <Button type='button' variant='contained' color='primary' onClick={ handleUpdate }>Update 2nd index</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default HooksComponent1