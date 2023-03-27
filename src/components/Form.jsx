import React, { useState } from "react";
import style from "./Form.module.css";
import Card from "./Card";


function Form(){

    const [nombre, setNombre] = useState('');
    const[pelicula, setPelicula] = useState('');
    const [informacion, setInformacion] = useState(false);

    const onChangeInputNombre = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeInputPelicula =(event)=>{
        setPelicula(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const nombreValido = nombre.trim();
        const peliculaValida = pelicula.trim();

        if (nombreValido.length > 3 && peliculaValida.length > 6){
            setInformacion(true)
        }
        else{
            setInformacion(false)
            alert("Por favor chequea que la información sea correcta.")
        }
    } 

    return(
        <div className={style.container}>
            <h1> ¿Cuál es tu película favorita ♥️?</h1>
            <form className={style.form} onSubmit={onSubmit}>
                <input className={style.input} type="text" placeholder="Ingrese su nombre" onChange={onChangeInputNombre} value={nombre}/>
                <input className={style.input} type="text" placeholder="Ingrese su pelicula favorita" onChange={onChangeInputPelicula} value={pelicula}/>
                <button className={style.button}>Enviar</button>
            </form>
            {informacion ? <Card userName={nombre} movie={pelicula}/> : null}
        </div>
    )

}


export default Form;
