import Navbar from "./components/layout/nav"
import HeroSection from "./components/hero"
import ProductsSection from "./components/products"
import TestimonialsSection from "./components/testemonial"
import ContactSection from "./components/contact"
import Footer from "./components/layout/footer"
import KifnaGallerySection from "./components/gallery"
import KifnaVideoPlayer from "./components/video"
function App() {
 

  return (
    <>
 <Navbar />
 <HeroSection />
  <KifnaVideoPlayer />
  <ProductsSection />
  <TestimonialsSection />
  <ContactSection />
  <KifnaGallerySection />
  <Footer />
    </>
  )
}

export default App
