import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Rrespresentante: <span>{cita.propietario}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hola: <span>{cita.hora}</span> </p>
            <p>Sintomas: <span>{cita.sintomas}</span> </p>

            <button type="submit"
                    className="u-full-width button eliminar"  
                    onClick={() => eliminarCita(cita.id)}  
            >
                Atendido
            </button>
        </div>
    );

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;