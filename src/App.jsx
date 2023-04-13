import { Navbar } from './components/Navbar';
import { GalleryWithSlider } from './components/GalleryWithSlider';
import { AboutUs } from './About us/AboutUs';
import { SuccesStories } from './SuccessStories/SuccesStories';

function App() {
  return (
    <>
      <Navbar />
      <GalleryWithSlider/>
      <AboutUs />
      <SuccesStories/>
    </>
  );
}

export default App;
