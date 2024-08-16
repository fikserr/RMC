import Container from "../../layout/container";
import chooseImg from "../../images/chooseImg1.jpeg";
import chooseImgTwo from "../../images/chooseImg2.jpeg";
import chooseImgThree from "../../images/chooseImg3.jpeg";
import chooseImgFour from "../../images/chooseImg4.jpeg";
import styles from "./choose.module.scss";

function Choose() {
  return (
    <div className={styles.choose}>
      <Container className={styles.choose__container}>
        <h1 className={styles.choose__title}>Почему выбирают нас</h1>
        <div className={styles.choose__cards}>


          <div className={styles.choose__card}>
            <div className={styles.choose__card_content}>
              <h5 className={styles.choose__card_title}>
                Опыт и профессионализм
              </h5>
              <p className={styles.choose__card_text}>
                Наши специалисты имеют многолетний опыт в различных сферах
                недвижимости, что гарантирует высокое качество услуг
              </p>
            </div>
          </div>
          <div className={styles.choose__card}>
            <img src={chooseImg} alt="" className={styles.choose__card_img} />
          </div>
          <div className={styles.choose__card}>
            <div className={styles.choose__card_content}>
              <h5 className={styles.choose__card_title}>
                Прозрачность и доверие
              </h5>
              <p className={styles.choose__card_text}>
              Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами
              </p>
            </div>
          </div>


          
          <div className={styles.choose__card}>
            <img src={chooseImgTwo} alt="" className={styles.choose__card_img} />
          </div>
          <div className={styles.choose__card}>
            <div className={styles.choose__card_content}>
              <h5 className={styles.choose__card_title}>
              Высокий уровень обслуживания
              </h5>
              <p className={styles.choose__card_text}>
              Мы всегда на связи, чтобы помочь вам в любое время
              </p>
            </div>
          </div>
          <div className={styles.choose__card}>
            <img src={chooseImgThree} alt="" className={styles.choose__card_img} />
          </div>



          <div className={styles.choose__card}>
            <div className={styles.choose__card_content}>
              <h5 className={styles.choose__card_title}>
              Индивидуальный подход
              </h5>
              <p className={styles.choose__card_text}>
              Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента
              </p>
            </div>
          </div>

          <div className={styles.choose__card}>
            <img src={chooseImgFour} alt="" className={styles.choose__card_img} />
          </div>

          <div className={styles.choose__card}>
            <div className={styles.choose__card_content}>
              <h5 className={styles.choose__card_title}>
              Комплексное обслуживание
              </h5>
              <p className={styles.choose__card_text}>
              Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Choose;
