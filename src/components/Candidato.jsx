import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import "./candidatos.css";
import "./sweet.css";

const Candidato = ({ candidatoNumero, contadorInicial }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(`candidato${candidatoNumero}`);
    return storedCount ? parseInt(storedCount, 10) : contadorInicial;
  });

  const handleDecrement = () => {
    swal({
      title: "¿Realmente quieres descontar un voto?",
      buttons: ["No", "Sí, descontar"],
      dangerMode: true,
    })
    .then((willDecrement) => {
      if (willDecrement) {
        setCount(count > 0 ? count - 1 : count);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem(`candidato${candidatoNumero}`, count.toString());
  }, [count, candidatoNumero]);

  return (
    <div className="card">
      <h2 className='candi'>Candidato {candidatoNumero}</h2>
      <p className='contador'>{count}</p>
      <button className="boton" onClick={() => setCount(count + 1)}>➕</button>
      <button className="boton" onClick={handleDecrement}>➖</button>
    </div>
  );
};

export default Candidato;