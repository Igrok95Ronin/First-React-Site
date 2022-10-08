import './services.css';
// import check from './checkmark.svg';

function Services() {
    return(
        <section className="services">
            <div className="container">
                <h2 className="services__title">НАШИ УСЛУГИ:</h2>
                <div className="services__box">
                    <ul>
                        <li className="services__li">УСТРАНЕНИЕ ЗАСОРОВ</li>
                        <li className="services__li">УСТРАНЕНИЕ ПРОТЕЧКИ</li>
                        <li className="services__li">РЕМОНТ САНТЕХНИКИ</li>
                        <li className="services__li">УСТАНОВКА ВОДОСЧЕТЧИКОВ</li>
                        <li className="services__li">ЗАМЕНА И РЕМОНТ ТРУБ</li>
                        <li className="services__li">УСТАНОВКА ТЕХНИКИ</li>
                        <li className="services__li">УСТАНОВКА ВАННЫ</li>
                        <li className="services__li">И МНОГОЕ ДРУГОЕ...</li>
                    </ul>
                    <p className="services__dscr">Все виды сантехнических услуг, позвоните нам, чтобы уточнить нужную Вам услугу! Пенсионерам и инвалидам скидка 10% на все услуги.</p>
                </div>
            </div>
        </section>
    )
}
export default Services;