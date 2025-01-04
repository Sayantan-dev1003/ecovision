import Header from "../Components/Header"
import HomeBG from "../Components/HomeBG"
import HomeText from "../Components/HomeText"

const Home = () => {
  return (
    <div className="w-full h-screen relative">
        <Header />
        <HomeBG />
        <HomeText />
    </div>
  )
}

export default Home