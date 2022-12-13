import './App.css';
import Button from 'react-bootstrap/Button';

function formulario(){
return(
    <div className='App'>
        <h1>Formulario de Ingreso</h1>
        <form action='/createAdd' method='POST'>
            <div className='col-md-12'>
                <input placeholder="Actividad">

                </input>
            </div>
            <div className='col-md-12'>
                
            <input placeholder='Entrada' type="number"></input>
            </div>
            <div className='col-md-12'>
                <Button variant="outline-success" >Agregar</Button>
            </div>
        </form>
    </div>
);
}
export default formulario;