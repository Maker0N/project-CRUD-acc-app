import React from "react";
import { useState } from "react";
// import state from "./redux/state";
import mainStyle from "./styles/main.module.scss";

const { main } = mainStyle;

// const date = Date();

const MainForm = (props) => {
  let numberItem
    props.state.list.length === 0
      ? (numberItem = 1)
      : (numberItem = props.state.list[props.state.list.length - 1].id + 1);
  const [formState, setFormState] = useState({
    id: numberItem,
    date: Date(),
    clientName: "",
    carrierName: "",
    phone: undefined,
    comment: "",
    ati: undefined,
  });

  const { clientName, carrierName, phone, comment, ati } = formState;

  function changeInput(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const { date, clientName, carrierName, phone, comment, ati } = formState;
    const item = {
      id: numberItem,
      date,
      clientName,
      carrierName,
      phone,
      comment,
      ati,
    };
    props.addNewItem(item);
    e.target.reset();
  }

  return (
    <div className={main}>
      Main Form
      <form type="submit" onSubmit={submitForm}>
        <div>
          Номер заявки:
          {props.state.list.length + 1}
        </div>
        <div>
          Дата и время получения заявки:
          {formState.date}
        </div>
        <div>
          Название фирмы клиента
          <input
            type="text"
            name="clientName"
            value={clientName}
            onChange={changeInput}
          />
        </div>
        <div>
          ФИО перевозчика
          <input
            type="text"
            name="carrierName"
            value={carrierName}
            onChange={changeInput}
          />
        </div>
        <div>
          Контактный телефон перевозчика
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={changeInput}
          />
        </div>
        <div>
          Комментарии
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={changeInput}
          />
        </div>
        <div>
          ATI код сети перевозчика
          <input type="text" name="ati" value={ati} onChange={changeInput} />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default MainForm;
