import "./header.styles.css"
import { ButtonIcon } from "./../../shared/buttonIcon/ButtonIcon"
import { Select } from "../../shared/select/Select"
import searchIcon from './Icons/search.svg'


export const Header = () => {


    return (
        <header className="header">
            <time className="date">Среда, 13 окт</time>
            <div className="sidebar">
                <div>
                    <p>Новые звонки <span className="color-green">20 из 30 шт</span></p>
                    <div className="container">
                        <div className="scale new-calls"></div>
                    </div>
                </div>
                <div>
                    <p>Качество разговоров <span className="color-yellow">40%</span></p>
                    <div className="container">
                        <div className="scale quality"></div>
                    </div>
                </div>
                <div>
                    <p>Конверсия в заказ <span className="color-red">67%</span></p>
                    <div className="container">
                        <div className="scale order"></div>
                    </div>
                </div>
            </div>
            <ButtonIcon>
                <img src={searchIcon} alt="#"></img>
            </ButtonIcon>
            <Select
                options={[
                    { id: '01', name: 'ИП Сидорова Александра Михайловна' },
                    { id: '02', name: 'ИП Сидорова Александра Михайловна' }
                ]}
            />
            <div className="user">
                <div className="avatar"></div>
                <select name="" id=""></select>
            </div>
        </header>
    )
}