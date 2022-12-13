import '../App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Tabla from './tabla.js';
// import Button from 'semantic-ui-react';


export default function Formulario(){
    const [datos , Mensaje ] = useState('');
    const setInvoice = () =>{

        Mensaje("Datos ingresados");
    }
return(
    <div className='App'>
        <h1>Formulario de Ingreso</h1>
        <form action='/createAdd' method='POST'>
            <div className='col-md-12'>
                <input placeholder="Actividad" name='actividad'>

                </input>
            </div>
            <div className='col-md-12'>
                
            <input placeholder='Entrada' name='costo' type="number"></input>
            </div>
            <div className='col-md-12'>
                <Button variant="outline-success" onClick={()=> setInvoice()} >Agregar</Button>
            </div>
        </form>
        <Tabla setInvoice={datos}/>
    </div>
);}