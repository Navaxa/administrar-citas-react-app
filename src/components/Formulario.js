import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const dataForm = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }

    const [citas, setCitas] = useState(dataForm);

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCitas({
            ...citas,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = citas;

    const submitForm = (e) => {
        e.preventDefault();

        // Validar campos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        
        // Asignar id
        citas.id = uuid();
        citas.sintomas = citas.sintomas.trim();

        // Crear cita
        crearCita(citas);

        // Reiniciar el formularo
        setCitas(dataForm);
    }

    return (
        <>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form onSubmit={submitForm} >
                <label>Nombre mascota</label>
                <input type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={mascota}
                >
                </input>

                <label>Nombre respresentante</label>
                <input type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre respresentante"
                    onChange={handleChange}
                    value={propietario}
                >
                </input>

                <label>Nombre mascota</label>
                <input type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                >
                </input>

                <label>Nombre mascota</label>
                <input type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                >
                </input>

                <label>Sintomas</label>
                <textarea name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>

                <button type="submit"
                    className="u-full-width button-primary"
                >
                    Enviar
                </button>

            </form>
        </>
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;