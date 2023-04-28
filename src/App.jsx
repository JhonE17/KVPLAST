import { Navbar } from './components/Navbar';
import { GalleryWithSlider } from './components/GalleryWithSlider';
import { AboutUs } from './About us/AboutUs';
import { SuccesStories } from './SuccessStories/SuccesStories';
import { ContactUs } from './ContactUs/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <GalleryWithSlider/>
      <AboutUs />
      <SuccesStories/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
