import React, { useState} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';

const HooksComponent2 = () => {
  const [user, setUser ] = useState(
    [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
      }]
  )

  const handleUpdate=()=> {
    const updateState = user.map(item => {
      if(item.id === 2){
        return {
          ...item,
            name: 'John Maxwell',
            username: 'jmaxwell'
        }
      }
      return item
    })

    setUser(updateState);
  }
  return (
    <Box>
      <Card>
      <CardHeader
          title='Update 2 properties'
          titleTypographyProps={{variant:'h5' }}
          style={{ textAlign: 'center' }}
        />
        <CardContent>
          <List>
            {
              user.map((item,i) => {
                return (
                  <React.Fragment key={item.id}>
                    <ListItem sx={{borderBottom: '1px solid #cdcdcd'}}>
                      <ListItemText primary={item.name} secondary='Name'/>
                      <ListItemText primary={item.username} secondary='Username'/>
                    </ListItem>
                  </React.Fragment>
                )
              })
            }
            
          </List>
        </CardContent>
        <CardActions>
          <Button type='button' variant='contained' color='primary' onClick={ handleUpdate }>Update properties</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default HooksComponent2