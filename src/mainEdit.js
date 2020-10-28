import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import mainStyle from "./styles/main.module.scss";

const { main } = mainStyle;

const MainEdit = (props) => {
  const { number } = useParams();

  const [item] = props.state.list.filter(it => it.id === +number)
  const [editState, setEditState] = useState(item)

  console.log(editState)

  function changeInput(e) {
    const { name, value } = e.target;
    setEditState({
      ...editState,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const { id, date, clientName, carrierName, phone, comment, ati } = editState;
    const item = {
      id,
      date,
      clientName,
      carrierName,
      phone,
      comment,
      ati,
    };
    props.editItem(item);
    e.target.reset();
  }


  return (
    <div className={main}>
      MainEdit
      <form type="submit" onSubmit={submitForm}>
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
          <input type="text" name="ati" value={editState.ati} onChange={changeInput} />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default MainEdit