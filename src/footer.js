import React from "react";
import { useSelector } from 'react-redux'
import footerStyle from './styles/footer.module.scss'

const { footer } = footerStyle

const Footer = () => {
  const { list } = useSelector(s => s.taskReducer)
  const sumOfTasks = `Заявок на данный момент: ${list.length} шт.`;
  return <div className={footer}>{sumOfTasks}</div>;
};

export default Footer;
