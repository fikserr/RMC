import Container from "../../layout/container";
import key from '../../images/key.png'
import loupe from '../../images/loupe.png'
import grass from '../../images/grass.png'
import styles from "./services.module.scss";

function Services() {
  return (
    <div className={styles.services}>
      <Container className={styles.services__container}>
        <h1 className={styles.services__title}>Услуги</h1>
        <p className={styles.services__text}>
          Мы предлагаем широкий спектр услуг для наших клиентов
        </p>
        <div className={styles.services__cards}>
          <div className={styles.services__cardBig}>
            <h5 className={styles.services__cardBig_title}>Оценка недвижимости</h5>
            <p className={styles.services__cardBig_text}>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.62 5.49481L8.42006 12.0598L8.31411 12.1719L8.20497 12.0629L5.36522 9.22477C5.15692 9.03157 4.88191 8.92643 4.59778 8.93145C4.31281 8.93648 4.04091 9.05192 3.83937 9.25346C3.63783 9.455 3.52239 9.7269 3.51736 10.0119C3.51235 10.296 3.61748 10.571 3.81067 10.7793L7.55871 14.5273C7.55872 14.5273 7.55873 14.5274 7.55874 14.5274C7.6627 14.6313 7.78643 14.7133 7.92261 14.7686C8.05882 14.8238 8.20471 14.8513 8.35169 14.8492C8.49867 14.8472 8.64375 14.8157 8.77835 14.7566C8.91291 14.6976 9.03428 14.6122 9.13529 14.5054L14.62 5.49481ZM14.62 5.49481C14.62 5.49479 14.62 5.49477 14.6201 5.49475C14.8204 5.28285 15.0967 5.15918 15.3882 5.15093C15.6797 5.14268 15.9626 5.25053 16.1746 5.45076C16.3866 5.65112 16.5103 5.92745 16.5185 6.21899C16.5268 6.51052 16.4189 6.7934 16.2186 7.00543L16.3277 7.10843L16.2186 7.00544L9.13538 14.5053L14.62 5.49481Z"
                    fill="white"
                    stroke="#E1AF93"
                    stroke-width="0.3"
                  />
                </svg>
              </span>
              Проведение экспертных оценок рыночной стоимости недвижимости
            </p>
            <p className={styles.services__cardBig_text}>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.62 5.49481L8.42006 12.0598L8.31411 12.1719L8.20497 12.0629L5.36522 9.22477C5.15692 9.03157 4.88191 8.92643 4.59778 8.93145C4.31281 8.93648 4.04091 9.05192 3.83937 9.25346C3.63783 9.455 3.52239 9.7269 3.51736 10.0119C3.51235 10.296 3.61748 10.571 3.81067 10.7793L7.55871 14.5273C7.55872 14.5273 7.55873 14.5274 7.55874 14.5274C7.6627 14.6313 7.78643 14.7133 7.92261 14.7686C8.05882 14.8238 8.20471 14.8513 8.35169 14.8492C8.49867 14.8472 8.64375 14.8157 8.77835 14.7566C8.91291 14.6976 9.03428 14.6122 9.13529 14.5054L14.62 5.49481ZM14.62 5.49481C14.62 5.49479 14.62 5.49477 14.6201 5.49475C14.8204 5.28285 15.0967 5.15918 15.3882 5.15093C15.6797 5.14268 15.9626 5.25053 16.1746 5.45076C16.3866 5.65112 16.5103 5.92745 16.5185 6.21899C16.5268 6.51052 16.4189 6.7934 16.2186 7.00543L16.3277 7.10843L16.2186 7.00544L9.13538 14.5053L14.62 5.49481Z"
                    fill="white"
                    stroke="#E1AF93"
                    stroke-width="0.3"
                  />
                </svg>
              </span>
              Анализ рынка и подготовка отчетов
            </p>
          </div>
          <div className={styles.services__card}>
            <h5 className={styles.services__card_title}>
            Сдача недвижимости в аренду
            </h5>
            <img src={key} alt="image" className={styles.services__card_key} />
          </div>
          <div className={styles.services__card}>
            <h5 className={styles.services__card_title}>
            Поиск недвижимости в аренду
            </h5>
            <img src={loupe} alt="image" className={styles.services__card_loupe} />
          </div>
          <div className={styles.services__card}>
            <h5 className={styles.services__card_title}>
            Купля/Продажа недвижимости
            </h5>
            <img src={grass} alt="image" className={styles.services__card_image} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
