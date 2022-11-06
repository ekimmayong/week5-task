import React from 'react';
import _ from 'lodash';
import { Grid, Typography } from '@mui/material';

const AdvanceComponent1 = () => {
  //symetric difference
    const arrOne = [{ 
        id: 20, 
        name: 'alex' 
        
        }, { 
        id: 30, 
        name: 'alina' 
    }] 
        
    const arrTwo = [{ 
        id: 40, 
        name: 'hello' 
        
        }, { 
        id: 30, 
        name: 'world' 
    }] 

    //symetric array solution
    const xor = _.xorBy(arrOne, arrTwo, 'id');
    const diff = _.zip(_.difference(arrOne, arrTwo), _.difference(arrOne, arrTwo))

    console.log(diff)

    //select table
    const str = ['u', 'ec']
    const arr = [{
      storageVal: 'u',
      table: ['E', 'F']
    },{
      storageVal: 'data',
      id: 3
    },{
      storageVal: 'ec',
      table: ['E']
    }]
  
    //select table solution
    const maps = _.intersectionWith(arr, str,(o, id) => o.storageVal === id)

    //Flatten array
    const a =[['E'], ['F']]

    const flatten = _.flatten(a)


    // Flatten and intersect
    const t = [['E', 'F'],[['F'], ['G']]];

    const flatIntersect = _.intersection(_.flatten(_.flatten(t)))

    console.log(flatIntersect)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h4'>A Lodash A</Typography>
            <Typography variant='body'>Array 1</Typography>
            <Typography variant='body1'>{arrOne.map(item => `{ id: ${item.id}, name: ${item.name} } `)}</Typography>
            <br/>
            <Typography variant='body'>Array 2</Typography>
            <Typography variant='body1'>{arrTwo.map(item => `{ id: ${item.id}, name: ${item.name} } `)}</Typography>
            <br />
            <Typography variant='h6'>Result A</Typography>
            <Typography variant='body1'>{xor.map(item => `{ id: ${item.id}, name: ${item.name} } `)}</Typography>
            <br />
            <Typography variant='h6'>Result B</Typography>
            <Typography variant='body1'>{diff.map(item => `{ id: ${item.id}, name: ${item.name} } `)}</Typography>


            <br/>
            <Typography variant='h4'>B Lodash - Select table</Typography>
            <Typography variant='body1'>Result:  {maps.map((item, i) => (i ? ', ' : '') + `[ ${item.table} ]`)}</Typography>
            <br />
            <br/>
            <Typography variant='h4'>C Lodash - Flatten Array</Typography>
            <Typography variant='body1'>Result:  [{flatten.map((item, i) => (i ? ', ' : '') +  item)}]</Typography>
            <br />

            <br />
            <br/>
            <Typography variant='h4'>D Lodash - Flatten and intersect Array</Typography>
            <Typography variant='body1'>Result:  [{flatIntersect.map((item, i )=> (i ? ', ': '') + item)}]</Typography>
            <br />
          </Grid>

          <Grid item xs={12}>

          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>

      </Grid>
    </Grid>
  )
}

export default AdvanceComponent1