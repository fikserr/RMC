import { NavLink } from "react-router-dom";
import Container from "../../layout/container/";
import styles from "./navbar.module.scss";
import { useState } from "react";
import classNames from "classnames";
import Logo from "../../ui/logo";

function Navbar() {
  const [dropDown,setDropDown] = useState(false)
  return (
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
          <Logo/>

        <div className={styles.navbar__links}>
          <button className={classNames(styles.navbar__links_dropdown, dropDown ? styles.active : styles.navbar__links_dropdown )} onClick={()=>setDropDown(!dropDown)}>
            Услуги
            <span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 12.5L10.5 7.5L5.5 12.5"
                  stroke="#E1AF93"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <NavLink to="/" className={styles.navbar__links_link}>О нас</NavLink>
          <NavLink to="/" className={styles.navbar__links_link}>Блог</NavLink>
          <NavLink to="/" className={styles.navbar__links_link}>Контакты</NavLink>
          <div className={classNames(styles.navbar__dropdown, dropDown ? styles.active : "")}>
            <NavLink to="/" className={styles.navbar__dropdown_link}>Купить</NavLink>
            <NavLink to="/" className={styles.navbar__dropdown_link}>Арендовать</NavLink>
            <NavLink to="/" className={styles.navbar__dropdown_link}>Продать</NavLink>
            <NavLink to="/" className={styles.navbar__dropdown_link}>Оценка недвижимости</NavLink>
          </div>
        </div>

        <div className={styles.navbar__buttons}>
          <button className={styles.navbar__btn}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6541 16.5951L20.5836 19.5231C20.7202 19.6646 20.7958 19.854 20.7941 20.0507C20.7924 20.2473 20.7135 20.4354 20.5745 20.5745C20.4354 20.7135 20.2473 20.7924 20.0507 20.7941C19.854 20.7958 19.6646 20.7202 19.5231 20.5836L16.5936 17.6541C14.6793 19.2943 12.204 20.1292 9.68734 19.9838C7.17065 19.8383 4.80812 18.7237 3.0955 16.8739C1.38287 15.024 0.453292 12.5828 0.501808 10.0624C0.550324 7.54193 1.57317 5.13825 3.35571 3.35571C5.13825 1.57317 7.54193 0.550324 10.0624 0.501808C12.5828 0.453292 15.024 1.38287 16.8739 3.0955C18.7237 4.80812 19.8383 7.17065 19.9838 9.68734C20.1292 12.204 19.2943 14.6793 17.6541 16.5936V16.5951ZM10.2501 18.5001C12.4382 18.5001 14.5366 17.6309 16.0838 16.0838C17.6309 14.5366 18.5001 12.4382 18.5001 10.2501C18.5001 8.06209 17.6309 5.96367 16.0838 4.41649C14.5366 2.86932 12.4382 2.00012 10.2501 2.00012C8.06209 2.00012 5.96367 2.86932 4.41649 4.41649C2.86932 5.96367 2.00012 8.06209 2.00012 10.2501C2.00012 12.4382 2.86932 14.5366 4.41649 16.0838C5.96367 17.6309 8.06209 18.5001 10.2501 18.5001Z"
                fill="#333333"
              />
            </svg>
          </button>
          <button className={styles.navbar__btn}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.05489 16.4754L9.05381 16.4744C6.46406 14.126 4.37492 12.2274 2.92445 10.4529C1.48222 8.68839 0.75 7.13843 0.75 5.5C0.75 2.82511 2.83332 0.75 5.5 0.75C7.01327 0.75 8.4781 1.45834 9.43088 2.56846L10 3.23157L10.5691 2.56846C11.5219 1.45834 12.9867 0.75 14.5 0.75C17.1667 0.75 19.25 2.82511 19.25 5.5C19.25 7.13843 18.5178 8.68839 17.0756 10.4529C15.6251 12.2274 13.5359 14.126 10.9462 16.4744L10.9451 16.4754L10 17.3358L9.05489 16.4754Z"
                stroke="#333333"
                stroke-width="1.5"
              />
            </svg>
          </button>
          <button className={styles.navbar__btn}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6673 11.3711L12.0451 9.99278C12.2307 9.80944 12.4654 9.68394 12.7209 9.63151C12.9764 9.57908 13.2416 9.60198 13.4844 9.69743L15.1635 10.3681C15.4088 10.4677 15.6191 10.6377 15.768 10.8567C15.9169 11.0758 15.9976 11.3339 16 11.5988V14.6753C15.9986 14.8555 15.9607 15.0335 15.8887 15.1986C15.8167 15.3638 15.712 15.5126 15.581 15.6362C15.45 15.7598 15.2953 15.8556 15.1263 15.9178C14.9573 15.9801 14.7775 16.0074 14.5976 15.9983C2.83136 15.2661 0.457192 5.29791 0.00819117 1.48294C-0.0126518 1.2956 0.00639187 1.10596 0.0640691 0.926515C0.121746 0.747064 0.21675 0.581865 0.34283 0.441784C0.468911 0.301703 0.62321 0.189915 0.795577 0.113775C0.967944 0.0376351 1.15447 -0.00113167 1.34289 2.51474e-05H4.31368C4.57878 0.000810161 4.83758 0.0809193 5.0568 0.230049C5.27602 0.379178 5.44563 0.590508 5.54382 0.836857L6.21424 2.51667C6.31281 2.75854 6.33796 3.02409 6.28654 3.28017C6.23513 3.53624 6.10944 3.77149 5.92516 3.95652L4.5474 5.33483C4.5474 5.33483 5.34084 10.7065 10.6673 11.3711Z"
                stroke="#333333"
                stroke-width="1.5"
              />
            </svg>
          </button>
          <button className={styles.navbar__language}>
            Ru
            <span>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L6.5 6L11.5 0.999999"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
