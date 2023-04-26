import { Carousel } from 'flowbite-react';

//Data
const images = [
  { path: 'assets/images/Slider01.jpg' },
  { path: 'assets/images/Slider02.jpg' },
  { path: 'assets/images/Slider03.jpg' },
  { path: 'assets/images/Slider04.jpg' },
  { path: 'assets/images/Slider05.jpg' },
  { path: 'assets/images/Slider06.jpg' },
  { path: 'assets/images/Slider07.jpg' },
];

export const GalleryWithSlider = () => {
  return (
    <div className='h-96 overflow-hidden overscroll-none  md:h-138'>
      <Carousel
        className='btn-carousel carousel'
        slideInterval={10000}
        indicators={false}>
        {images.map((image, index) => (
          <div key={index} className=''>
            <img src={image.path} className='' alt='...' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
