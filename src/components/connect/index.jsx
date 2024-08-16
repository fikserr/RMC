import Container from '../../layout/container'
import connectImage from '../../images/connectImage.jpeg'
import styles from './connect.module.scss'

function Connect() {
  return (
    <div className={styles.connect}>
        <Container className={styles.connect__container}>
            <div className={styles.connect__content}>
                <h1 className={styles.connect__title}>
                Остались вопросы?<br /> Свяжитесь с нами
                </h1>
                <form action="" className={styles.connect__form}>
                    <input type="text" placeholder='ФИО *' name="" id="" className={styles.connect__input} />
                    <input type="text" placeholder='Номер телефона *' name="" id="" className={styles.connect__input} />
                    <input type="email" placeholder='E-mail' name="" id="" className={styles.connect__input} />
                    <input type="text" placeholder='Ваш вопрос' name="" id="" className={styles.connect__input} />
                </form>
                <button className={styles.connect__btn}>Отправить</button>
            </div>

        <img src={connectImage} alt="image" className={styles.connect__image}/>
        </Container>
    </div>
  )
}

export default Connect