import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </>
  )
}

export default App