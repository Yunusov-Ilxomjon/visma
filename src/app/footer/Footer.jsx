import './footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-top">
        <div className="footer-left">
          <Image width={22} height={26} src="/footer-image/location.png" alt="" />
          <h3 style={{color: 'white', fontSize: '16px' }}>123456, г. Тавима, ул. Морская, д. 21</h3>
        </div>

        <div className="footer-center">
          <h1 style={{color: 'white', fontSize: '40px' }}>VISMA</h1>
        </div>

        <div className="footer-right">
          <div className="footer-call">
            <Image width={26} height={26} src="/footer-image/call.png" alt="" />
            <h3 style={{color: 'white', fontSize: '16px' }}>+998 (91) 123-45-67</h3>
          </div>

          <div className="footer-sms">
            <Image width={26} height={26} src="/footer-image/sms.png" alt="" />
            <h3 style={{ fontSize: '16px' }}>order@visma.ru</h3>
          </div>

        </div>
      </div>

      <div className="footer-bottom">

        <div className="footer-info">
          <h1 style={{color: 'white', fontSize: '16px' }}>ИНФОРМАЦИЯ О ЮР. ЛИЦЕ</h1>
          <ul>
            <li><a href="#">ОГРН 11111111111111111</a></li>
            <li><a href="#">ИНН 2222222222222</a></li>
            <li><a href="#">КПП 3333333333333</a></li>
            <li><a href="#">ОКПО 44444444444 ОКВЭД 52.24</a></li>
            <li><a href="#">ОКТМО 5555555555555</a></li>
          </ul>
        </div>

        <div className="footer-zakupki">
          <h1 style={{color: 'white', fontSize: '16px' }}>ЗАКУПКИ</h1>
          <ul>
            <li><a href="#">Нормативные документы  </a></li>
            <li><a href="#">Закупки на VISMA Order</a></li>
            <li><a href="#">Закупки на VISMA Tender</a></li>
          </ul>
        </div>

        <div className="footer-auctioner">
          <h1 style={{color: 'white', fontSize: '16px' }}>АКЦИОНЕРАМ</h1>
          <ul>
            <li><a href="#">Устав VISMA </a></li>
            <li><a href="#">Свидетельства госрегистрации</a></li>
            <li><a href="#">Список аффилированных лиц</a></li>
            <li><a href="#">Информация</a></li>
            <li><a href="#">Отчеты</a></li>
          </ul>
        </div>

        <div className="footer-company">
        <h1 style={{color: 'white', fontSize: '16px' }}>О КОМПАНИИ</h1>
          <ul>
            <li><a href="#">Порт сегодня </a></li>
            <li><a href="#">Характеристики порта</a></li>
            <li><a href="#">История</a></li>
            <li><a href="#">Дипломы и награды</a></li>
            <li><a href="#">Транспортная безопасность</a></li>
            <li><a href="#">Экология</a></li>
            <li><a href="#">Правовая информация</a></li>

          </ul>

        </div>


      </div>

    <div className="footer-text">
      <h1  style={{color: 'grey', fontSize: '13px'}}>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VISMA</h1>
    </div>

    </div>
  )
}

export default Footer