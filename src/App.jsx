

import Header from "./components/Header"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Create from "./components/Create"
import "./App.css"

const App = () => {
  
  return(
    <div className="app-container">
      <Header />
      <Create  />
      <Products />
      <Footer />
    </div>
  )
}
export default App
