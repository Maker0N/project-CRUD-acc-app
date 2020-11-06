import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { editItemAC } from './redux/taskReducer'
import mainStyle from "./styles/main.module.scss";

const { main, normLink } = mainStyle;

const MainEdit = () => {
  const { list } = useSelector(s => s.taskReducer)
  const dispatch = useDispatch()
  const { number } = useParams();
  const [item] = list.filter((it) => it.id === +number);
  const [editState, setEditState] = useState(item);

  function changeInput(e) {
    const { name, value } = e.target;
    setEditState({
      ...editState,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const {
      id,
      date,
      clientName,
      carrierName,
      phone,
      comment,
      ati,
    } = editState;
    const item = {
      id,
      date,
      clientName,
      carrierName,
      phone,
      comment,
      ati,
    };
    dispatch(editItemAC(item));
  }

  return (
    <div className={main}>
      <div style={{ marginBottom: "30px" }}>Отредактируйте данные</div>
      <div>
        <div>
          Номер заявки:
          {editState.id}
        </div>
        <div>
          Дата и время получения заявки: 
          {editState.date}
        </div>
        <div>
          Название фирмы клиента
          <input
            type="text"
            name="clientName"
            value={editState.clientName}
            onChange={changeInput}
          />
        </div>
        <div>
          ФИО перевозчика
          <input
            type="text"
            name="carrierName"
            value={editState.carrierName}
            onChange={changeInput}
          />
        </div>
        <div>
          Контактный телефон перевозчика
          <input
            type="phone"
            name="phone"
            value={editState.phone}
            onChange={changeInput}
          />
        </div>
        <div>
          Комментарии
          <input
            type="text"
            name="comment"
            value={editState.comment}
            onChange={changeInput}
          />
        </div>
        <div>
          ATI код сети перевозчика
          <input
            type="text"
            name="ati"
            value={editState.ati}
            onChange={changeInput}
          />
        </div>
        <button onClick={submitForm}>
          <Link to="/" className={normLink}>
            Сохранить
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainEdit;
