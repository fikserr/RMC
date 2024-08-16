import Choose from '../../components/choose'
import Company from '../../components/company'
import Connect from '../../components/connect'
import Partners from '../../components/partners'
import Services from '../../components/services'
import styles from './about.module.scss'

function About() {
  return (
    <div className={styles.about}>
        <Company/>
        <Services/>
        <Choose/>
        <Partners/>
        <Connect/>
    </div>
  )
}

export default About