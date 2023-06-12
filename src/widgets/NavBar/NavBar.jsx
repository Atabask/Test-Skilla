import { LogoComp } from "./Logo/Logo"
import "./navbar.styles.css"
import { Button } from "../../shared/button/Button"
import resultsIcon from "./Icons/Results.svg"
import ordersIcon from "./Icons/Orders.svg"
import messagesIcon from "./Icons/Messages.svg"
import callsIcon from "./Icons/Calls.svg"
import contactsIcon from "./Icons/Contacts.svg"
import performersIcon from "./Icons/Performers.svg"
import reportsIcon from "./Icons/Reports.svg"
import baseIcon from "./Icons/Base.svg"
import settingsIcon from "./Icons/Settings.svg"
import yellowPointIcon from "./Icons/YellowPoint.svg"
import PlusIcon from "./Icons/Plus.svg"
import exclamationPointIcon from "./Icons/ExclamationPoint.svg"


export const NavBar = () => {



    return (
        <nav className="nav">
            <LogoComp />
            <div className="menu">
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={resultsIcon} alt="#" />Итоги</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={ordersIcon} alt="#" />Заказы</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={messagesIcon} alt="#" />Сообщения</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={callsIcon} alt="#" />Звонки <img className="yellowPoint" src={yellowPointIcon} alt="#" /></a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={contactsIcon} alt="#" />Контрагенты</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={performersIcon} alt="#" />Исполнители</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={reportsIcon} alt="#" />Отчеты</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={baseIcon} alt="#" />База знаний</a>
                <a className="menu-item" href="#">
                    <img className="menu-item-icon" src={settingsIcon} alt="#" />Настройки</a>
            </div>
            <div className="conteiner-btns">
                <Button>Добавить заказ <img className="menu-item-icon" src={PlusIcon} alt="#"/></Button>
                <Button>Оплата <img className="menu-item-icon" src={exclamationPointIcon} alt="#"/></Button>
            </div>
        </nav>
    )
}