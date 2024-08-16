import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import About from "../../pages/about"
import Header from "../../pages/header"


function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home