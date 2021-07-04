import React, {useState} from 'react';
import './App.css';

function App() {
  const [dataForm, setDataForm] = useState({
    cardNumber: 0,
    cardPassword: '',
  });

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    fetch('localhost:8081/api/belvo', {
      method: 'post',
      body: JSON.stringify(dataForm)
    }).then((response) => {
      console.log(response);
    });
    event.preventDefault();
  };

  return (
    <div className="content_form">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          name="cardNumber"
          placeholder="Numero de tarjeta"
          className="form_content form_input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cardPassword"
          placeholder="Contrasena"
          className="form_content form_input"
          onChange={handleChange}
        />
        <button className=" form_content form_button">Acceder</button>
      </form>
      <ul>
        <li>{dataForm.cardNumber}</li>
        <li>{dataForm.cardPassword}</li>
      </ul>
    </div>
  );
}

export default App;
