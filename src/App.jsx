import { AboutUs } from './About us/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { Products } from './Products/Products';
import { SuccesStories } from './SuccessStories/SuccesStories';
import { ButtonSocialRed, ButtonWhatsapp, Footer, GalleryWithSlider, Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <GalleryWithSlider />
      <AboutUs />
      <SuccesStories />
      <Products/>
      <ContactUs />
      <Footer />
      <ButtonWhatsapp/>
      <ButtonSocialRed/>
    </>
  );
}

export default App;
