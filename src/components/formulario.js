import '../App.css';
import * as React from 'react';
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Tabla from './tabla.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

export default function Formulario(){
    const [datos , Mensaje ] = useState('');
    const setInvoice = () =>{

        Mensaje("Datos ingresados");
    }
    
return(
    <Box>
        
    <div className='Apps '>
            <h1>Formulario de Ingreso</h1>
        <form action='/createAdd' method='POST'>
            <div className='col-md-12'>
                <TextField required
                id="outlined-required"
                name="Actividad"
                label="Requerido"
                />
            </div>
            <div className='col-md-12'>
                <TextField 
                    id='filled-number'
                    label="Costo"
                    type="number"
                    name='Costo'
                    inputLabelProps={{
                        shrink: true,
                    }}
                    variant='filled'
                />
            </div>
            <div className='col-md-12'>
                <Button variant="contained" color="success"  onClick={()=> setInvoice()}  >Agregar</Button>
            </div>
        </form>
        <Tabla setInvoice={datos}/>
    </div>
    </Box>
);}