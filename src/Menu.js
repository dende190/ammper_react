import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
  const handleClick = () => {
    fetch(
      'http://localhost:8081/api/belvo/logout',
      {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({'token': localStorage.token}),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
    .then(response => response.json())
    .then(data => {
      window.location.href = '/';
    })
    .catch(error => console.log(error))
  };

  return (
    <div className="content_menu">
      <ul>
        <li>
          <Link to="/account">
            Cuentas
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            Transacciones
          </Link>
        </li>
        <li onClick={handleClick}>
          Cerrar Sesion
        </li>
      </ul>
    </div>
  );
}

export default Menu;
