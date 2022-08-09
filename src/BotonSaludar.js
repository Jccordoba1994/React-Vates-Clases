import React from 'react';
import './style.css';

function MostrarInput() {
  let estiloInput = {
    color: 'blue',
    fontWeight: 'bold',
  };
  return <input type="number" style={estiloInput}></input>;
}

function ListaProvincias() {
  let provinciasArgentinas = [
    { id: 4, nombre: 'Cordoba' },
    { id: 5, nombre: 'Catamarca' },
    { id: 6, nombre: 'Santa Fe' },
    { id: 7, nombre: 'Chubut' },
  ];

  return (
    <select name="Provis" id="Provis">
      {provinciasArgentinas.map((p) => (
        <option value={p.id}>{p.nombre}</option>
      ))}
    </select>
  );
}

function ListaProvincias2() {
  let provinciasArgentinas = [
    { id: 4, nombre: 'Cordoba' },
    { id: 5, nombre: 'Catamarca' },
    { id: 6, nombre: 'Santa Fe' },
    { id: 7, nombre: 'Santiago del Estero' },
  ];

  let LasProvis = provinciasArgentinas.map((p) => (
    <option value={p.id}>{p.nombre}</option>
  ));

  return (
    <select name="Provis" id="Provis">
      {LasProvis}
    </select>
  );
}

export default function BotonSaludar() {
  return (
    <div>
      <button>Vamo taiere</button>
      <MostrarInput />
      <ListaProvincias />
      <ListaProvincias2 />
    </div>
  );
}
