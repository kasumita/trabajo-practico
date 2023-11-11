import React from 'react';
import Candidato from './components/Candidato';
import "./app.css";

function App() {
  return (
    <div className="app">
      <h2 id="titulo">Boca de Urnas</h2>
     
      <Candidato candidatoNumero={1} contadorInicial={0} />
      <Candidato candidatoNumero={2} contadorInicial={0} />
    </div>
  );
}

export default App;