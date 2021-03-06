import { useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from "./components/Formulario";

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(window.localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  // Realizar operaciones cuando el state cabia
  useEffect( () => {
    let citasIniciales = JSON.parse(window.localStorage.getItem('citas'));
    if (citasIniciales) {
      window.localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);

  const crearCita = cita => {
    setCitas([ ...citas, cita]);
  }

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length ? <h2>Administra tus citas</h2> : <h2>Aun no hay citas</h2> }
            {citas.map(cita => (
              <Cita key={cita.id} 
                    cita={cita}
                    eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
