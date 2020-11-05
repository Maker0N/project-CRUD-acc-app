import React from 'react'
import { Link } from 'react-router-dom'
import { deleteItemAC } from './redux/taskReducer'
import mainStyle from "./styles/main.module.scss";

const { main, itemCard, normButton, redButton, normLink } = mainStyle;

const SearchResult = (props) => {
  console.log(props)
  let result = 'результатов'
  switch (props.state.searchList.length) {
    case 1:
      result = 'результат'
      break
    case 2 || 3 || 4:
      result = 'результата'
      break
    default:
      result = "результатов";
  }
  return (
    <div className={main}>
      Нашлось {props.state.searchList.length} {result} поиска по "{props.state.keyWord}"

      {props.state.searchList.map((it) => {

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
                <Link to="/" className={normLink}>
                  Удалить
                </Link>
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
  )
}

export default SearchResult