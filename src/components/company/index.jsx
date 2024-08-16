import Container from '../../layout/container'
import companyImage from '../../images/companiImage.jpeg'
import styles from './company.module.scss'

function Company() {
  return (
    <div className={styles.company}>
        <Container className={styles.company__container}>
            <div className={styles.company__content}>
            <h1 className={styles.company__title}>О компании <br /> <span>RMC DE LUXE</span></h1>
            <p className={styles.company__text1}>RMC De Luxe — это риэлторское агентство в Ташкенте, специализирующееся на оценке, аренде и продаже недвижимости. Компания нацелена на предоставление высококачественных и комплексных услуг в сфере недвижимости для физических лиц и корпоративных клиентов</p>
            <p className={styles.company__text2}>С целью удовлетворения потребностей клиентов, компания обеспечивает профессиональный подход, индивидуальное обслуживание и инновационные решения</p>
            </div>
            <img src={companyImage} alt="image" className={styles.company__image}/>
        </Container>
    </div>
  )
}

export default Company