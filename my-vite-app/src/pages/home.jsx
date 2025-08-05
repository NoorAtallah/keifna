
import HeroSection from "../components/hero"
import ProductsSection from "../components/products"
// import TestimonialsSection from "../components/testemonial"
import ContactSection from "../components/contact"

// import KifnaGallerySection from "../components/gallery"
import KifnaVideoPlayer from "../components/video"
function Home() {
 

  return (
    <>

 <HeroSection />
  <KifnaVideoPlayer />
  <ProductsSection />
  {/* <TestimonialsSection /> */}
  <ContactSection />
  {/* <KifnaGallerySection /> */}
 
    </>
  )
}

export default Home
