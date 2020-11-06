import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { createSearchListAC } from './redux/taskReducer'
import headerStyle from "./styles/header.module.scss";

const { header, links, menu, menuSearch, normLink } = headerStyle;

const Header = () => {
  const dispatch = useDispatch()
  let [searchState, setSearchState] = useState("");

  const changeInputSearch = (e) => {
    setSearchState((searchState = e.target.value));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const searchString = searchState;
    dispatch(createSearchListAC(searchString));
  };

  return (
    <div className={header}>
      Система приема и ведения заявок
      <div className={menuSearch}>
        <div className={menu}>
          <Link to="/" className={links}>
            Список заявок
          </Link>
          <Link to="/form" className={links}>
            Оформить заявку
          </Link>
        </div>
        <div>
          <input type="text" onChange={changeInputSearch} style={{outline:"none"}}/>
          <button onClick={submitSearch}>
            <Link to="/search" className={normLink}>Поиск</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
