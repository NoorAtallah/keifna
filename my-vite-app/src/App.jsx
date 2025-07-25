import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/layout/nav"
import Footer from "./components/layout/footer"
import Home from "./pages/home"
import SimpleRouter from './pages/products'
import PastryPage from './pages/pastryPage'
import KarakTeaPage from './pages/karakTea'
import IceCreamPage from './pages/icecream'
import IceDrinksPage from './pages/iceDrinks'
import HotDrinksPage from './pages/hotDrinks'
import CoffeePage from './pages/coffePage'
import PastePage from './pages/pastePage'
import ContactPage from './pages/cnotactUs'
import BaseGelatoPage from './pages/baseGelato'
import ScrollToTop from './components/scrolltoTop'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<SimpleRouter />} />
            <Route path="/products/pastry" element={<PastryPage />} />
            <Route path="/products/karak-tea" element={<KarakTeaPage />} />
            <Route path="/products/ice-cream" element={<IceCreamPage />} />
            <Route path="/products/ice-drinks" element={<IceDrinksPage />} />
            <Route path="/products/hot-drinks" element={<HotDrinksPage />} />
            <Route path="/products/coffee" element={<CoffeePage />} />
            <Route path="/products/paste" element={<PastePage />} />
            <Route path="/products/base-gelato" element={<BaseGelatoPage />} />
            {/* Add more routes as needed */}
            <Route path="/contact" element={<ContactPage />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App