import React from "react";
import { Link } from "react-router-dom";
import { deleteItemAC } from './redux/taskReducer'
import mainStyle from "./styles/main.module.scss";

const { main, itemCard, normButton, normLink, redButton } = mainStyle;

const Main = (props) => {
  return (
    <div className={main}>
      Список заявок

      {props.state.list.map((it) => {

        const url = `https://ati.su/firms/${it.ati}/info`;
        const number = it.id;
        const editLink = `/edit/${number}`;

        function deleteButton(e) {
          e.preventDefault();
          props.dispatch(deleteItemAC(number));
        }

        return (
          <div className={itemCard} key={it.id}>
            <div>
              <div>Номер заявки: {it.id}</div>
              <div>Дата и время получения заявки: {it.date}</div>
              <div>Название фирмы клиента: {it.clientName}</div>
              <div>ФИО перевозчика: {it.carrierName}</div>
              <div>Телефон: {it.phone}</div>
              <div>Комментарии: {it.comment}</div>
              <div>
                Ссылка по ATI коду: ​<a href={url}>{it.ati}</a>​
              </div>
            </div>
            <div>
              <button
                className={redButton}
                type="button"
                onClick={deleteButton}
              >
                Удалить
              </button>
              <button className={normButton} type="button">
                <Link to={editLink} className={normLink}>
                  Редактировать
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
