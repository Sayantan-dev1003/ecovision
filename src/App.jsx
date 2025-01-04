import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </>
  )
}

export default App