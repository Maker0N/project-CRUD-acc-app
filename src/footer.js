import React from "react";
import footerStyle from './styles/footer.module.scss'

const { footer } = footerStyle

const Footer = (props) => {
  const sumOfTasks = `Заявок на данный момент: ${props.state.list.length} шт.`;
  return <div className={footer}>{sumOfTasks}</div>;
};

export default Footer;
