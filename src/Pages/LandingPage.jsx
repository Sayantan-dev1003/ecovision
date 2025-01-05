import Header from "../Components/Header"
import Home from "./Home"
import About from "./About"
import Features from "./Features"
import Working from "./Working"
import Contact from "./Contact"
import Footer from "../Components/Footer"

const LandingPage = () => {
  return (
    <div>
        <Header />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="features"><Features /></div>
        <div id="working"><Working /></div>
        <div id="contact"><Contact /></div>
        <Footer />
    </div>
  )
}

export default LandingPage