
import { Link } from 'react-router';
import style from './Menu.module.css';
import { IoIosContact } from "react-icons/io";


function Menu() {
  return (
    <nav className={style.nav}>

      <div className={style.container}>
        <img src="/logo.jpeg" alt="no found" />

        <ul>
            <li><Link to={'/'}>Inicio</Link></li>
             <li><Link to={'/'}>Propiedades</Link></li>
              <li><Link to={'/'}>Agentes</Link></li>
             <li><Link to={'/'}>Contactos</Link></li>
        </ul>
      </div>


      <button className={style.button_contact}> 
        <IoIosContact size={18} className={style.button_spacing_icon}/> 
        Contactos
      </button>

    </nav>
  )
}

export default Menu