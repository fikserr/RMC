import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ImgHouse from "../../images/756757614120817.jpg";
import ImgBuilding from "../../images/bab4d83d387f72a1393674bfbf0733bb.jpeg";
import ImgHouseTwo from "../../images/834a2435a88a5de006c3261e6af7a56c.png";
import ImgHouseThree from "../../images/7b6940a687897fd7a79ba76333a45519.jpeg";
import styles from "./header.module.scss";
import Container from "../../layout/container";

function Header() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.classList.add("swiper-button-prev");
        nextRef.current.classList.add("swiper-button-next");
      }
    }, 0);
  }, []);
  return (
    <div className={styles.header}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img
            src={ImgHouse}
            alt="headerImage"
            className={styles.header__image}
          />
          <Container className={styles.header__container}>
            <div>
              <h1 className={styles.header__title}>
                Найдите идеальное место для жизни
              </h1>
              <p className={styles.header__text}>
                Откройте двери в новое будущее с нами
              </p>
              <button className={styles.header__infoBtn}>Подробнее</button>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgBuilding}
            alt="headerImage"
            className={styles.header__image}
          />
          <Container className={styles.header__container}>
            <div>
              <h1 className={styles.header__title}>
                Инвестиции в недвижимость в Дубае
              </h1>
              <p className={styles.header__text}>
                Узнайте о возможностях и преимуществах инвестиций в Дубае
              </p>
              <button className={styles.header__infoBtn}>Подробнее</button>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgHouseThree}
            alt="headerImage"
            className={styles.header__image}
          />
          <Container className={styles.header__container}>
            <div>
              <h1 className={styles.header__title}>RMC DE LUXE</h1>
              <p className={styles.header__text}>
                Риэлторское агентство в Ташкенте
              </p>
              <button className={styles.header__infoBtn}>Подробнее</button>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgHouseTwo}
            alt="headerImage"
            className={styles.header__image}
          />
          <Container className={styles.header__container}>
            <div>
              <h1 className={styles.header__title}>Infinity</h1>
              <p className={styles.header__text}>от $500 000</p>
              <button className={styles.header__infoBtn}>Подробнее</button>
            </div>
          </Container>
        </SwiperSlide>
        <Container className={styles.header__container}>
            <div ref={prevRef} className={styles.swiperButtonPrev}></div>
            <div ref={nextRef} className={styles.swiperButtonNext}></div>
        </Container>
      </Swiper>
    </div>
  );
}

export default Header;
