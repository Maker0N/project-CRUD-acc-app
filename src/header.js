import React from 'react'
import { Link } from 'react-router-dom'
import headerStyle from './styles/header.module.scss'

const { header, links, buttonDiv } = headerStyle

const Header = () => {
  return (
    <div className={header}>
      Система приема и ведения заявок
      <div className={buttonDiv}>
        <Link to="/" className={links}>
          Список заявок
        </Link>
        <Link to="/form" className={links}>
          Оформить заявку
        </Link>
      </div>
    </div>
  );
}

export default Header