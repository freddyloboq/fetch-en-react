import { useState, useEffect } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState({});
  const [personaje, setPersonaje] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
      .then((respuesta) => {
        console.log("respuesta :>> ", respuesta);
        if (respuesta.ok) {
          setError(false);
          return respuesta.json();
        } else {
          throw new Error("Hubo un error");
        }
      })
      .then((result) => setData(result))
      .catch((error) => {
        console.log('error :>> ', error);
        setError(true)}
      );
  }, [personaje]);

  return (
    <>
      <h1 className="h1 text-success"> Practicando Fetch</h1>
      <input
        type="text"
        onChange={(e) => {
          setPersonaje(e.target.value);
        }}
      />
      <p>
        <span>Nombre:</span> {error ? "no hay personajes" : data.name}
      </p>
    </>
  );
}

export default App
