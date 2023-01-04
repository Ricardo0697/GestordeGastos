import React from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../App.css';
import { Route,Routes } from "react-router-dom";
import Formulario from "./formulario";
export default function Login() {
    return (
        <div className="col-md-12">

            <h1>Gestor Financiamiento</h1>
            <form method="post" action="/formulario">
                <div className='col-md-12'>
                    usuario
                    <TextField required
                        id="outlined-required"
                        name="Actividad"
                        label="Requerido"
                    />
                </div>
                <div className="col-md-12">
                    Contraseña
                    <TextField
                        required
                        id="outlined-required"
                        name="Actividad"
                        label="Requerido"
                    >

                    </TextField>
                </div>
                <Button variant="contained" color="success"   >Incio</Button>
            </form>
        </div>
    );
}