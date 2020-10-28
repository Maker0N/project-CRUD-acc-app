import React from "react";
// import { deleteItem } from "./redux/state";
import mainStyle from "./styles/main.module.scss";
// import state from './redux/state'

const { main, itemCard } = mainStyle;

const Main = (props) => {
  return (
    <div className={main}>
      Main Aplication
      {props.state.list.map((it) => {
        const url = `https://ati.su/firms/${it.ati}/info`;

        function deleteButton(e) {
          e.preventDefault();
          const id = it.id
          props.deleteItem(id)
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
              <div onClick={deleteButton}>Удалить</div>
              <div>Редактировать</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
