import React from 'react';
import './style.css';

function BtnInput(props) {
  var formulario_input = {
    width: '80%',
    marginLeft: '10%',
    marginBottom: '10px',
    height: '30px',
    borderRadius: '5px',
    outline: 'thick',
  };

  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      style={formulario_input}
    />
  );
}

function BtnIngresar() {
  return <button className="button">Ingresar</button>;
}

function OrigenPais(Origen) {
  var formulario_input = {
    width: '80%',
    marginLeft: '10%',
    marginBottom: '10px',
    height: '30px',
    borderRadius: '5px',
    outline: 'thick',
  };

  var ConexionNacional = [
    { id: 3, origen: 'Fibertel' },
    { id: 6, origen: 'VPN Corporativa' },
    { id: 8, origen: 'Red Claro' },
  ];

  var ConexionInternacional = [
    { id: 9, origen: 'VPN Symantec USA' },
    { id: 56, origen: 'VPN Europa' },
    { id: 98, origen: 'VPN Asia Samsung' },
  ];

  var ElementosOption;
  if (Origen.origen == 'Nacional') {
    ElementosOption = ConexionNacional.map((c) => (
      <option value={c.id}>{c.origen}</option>
    ));
  } else if (Origen.origen == 'Internacional') {
    ElementosOption = ConexionInternacional.map((c) => (
      <option value={c.id}>{c.origen}</option>
    ));
  } else {
    ConexionNacional = ConexionNacional.concat(ConexionInternacional);
    ElementosOption = ConexionNacional.map((c) => (
      <option value={c.id}>{c.origen}</option>
    ));
  }

  return <select style={formulario_input}> {ElementosOption}</select>;
}

function LoginWrap() {
  var login_wrap = {
    backgroundColor: '#ecf0f1',
    position: 'relative',
    margin: '0 auto',
    width: '350px',
    padding: '20px 20px 50px 20px',
    borderRadius: '5px',
    boxShadow: '5px 5px 8px #333',
  };

  var formulario = {
    paddingTop: '20px',
  };

  return (
    <div style={login_wrap}>
      <h2 style={{ textAlign: 'center', marginTop: '5px', fontWeight: 200 }}>
        Frontera Cristo Redentor
      </h2>
      <div style={formulario}>
        <BtnInput
          placeholder="Ingrese la patente"
          name="TBUsuario"
          id="TBUsuario"
        />
        <OrigenPais origen="Internacional" />
        <BtnIngresar />
      </div>
    </div>
  );
}

export default function Login() {
  return <LoginWrap />;
}
