import Navbar from "./components/navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./home/home"
import Details from "./details/details"
import Fav from "./fav/fav"
function App() {
 

  return (
    <>
      <div className="min-h-screen p-6 bg-[#E5D9F2] text-gray-600 text-lg ">
          <Navbar/>
          <Routes>
            <Route
            path="/"
            element={
              <Home/>
            }
            />
            <Route
            path="/favourites"
            element={
              <Fav/>
            }
            />
            <Route
            path="/recepie-item/:id"
            element={
              <Details/>
            }
            />
            
          </Routes>
        </div>
    </>
  )
}

export default App
        