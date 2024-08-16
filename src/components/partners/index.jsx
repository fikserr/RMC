import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./partners.module.scss";
import Container from "../../layout/container";

function Partners() {
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
    <div className={styles.partners}>
      <Container className={styles.partners__container}>
        <h1 className={styles.partners__title}>Наши партнеры</h1>
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
          <SwiperSlide className={styles.partners__slider}>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
          </SwiperSlide>
          <SwiperSlide className={styles.partners__slider}>

            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
            <div className={styles.partners__logo}>Logo Area</div>
          </SwiperSlide>
        </Swiper>
     
        <div ref={prevRef} className={styles.swiperButtonPrev}></div>
        <div ref={nextRef} className={styles.swiperButtonNext}></div>
      </Container>
    </div>
  );
}

export default Partners;
