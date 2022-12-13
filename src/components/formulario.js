import '../App.css';
import Button from 'react-bootstrap/Button';
// import Button from 'semantic-ui-react';


function formulario(){
    const setInvoice = () =>{
        alert('Hola');
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
    </div>
);
}
export default formulario;