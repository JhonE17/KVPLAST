import { AboutUs } from './About us/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { SuccesStories } from './SuccessStories/SuccesStories';
import { ButtonSocialRed, ButtonWhatsapp, Footer, GalleryWithSlider, Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <GalleryWithSlider />
      <AboutUs />
      <SuccesStories />
      <ContactUs />
      <Footer />
      <ButtonWhatsapp/>
      <ButtonSocialRed/>
    </>
  );
}

export default App;
