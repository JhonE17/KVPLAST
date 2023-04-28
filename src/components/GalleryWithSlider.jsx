import { Carousel } from 'flowbite-react';

//Data
const images = [
  { path: 'assets/images/Slide-06.jpg' },
  { path: 'assets/images/Slide-01.jpg' },
  { path: 'assets/images/Slide-04.jpg' },
  { path: 'assets/images/Slide-02.jpg' },
  { path: 'assets/images/Slide-05.jpg' },
  { path: 'assets/images/Slide-03.jpg' },
  // { path: 'assets/images/Slide-07.jpg' },
];

export const GalleryWithSlider = () => {
  return (
    <div className='h-52 pt-14 overflow-hidden overscroll-none  md:h-138'>
      <Carousel
        className='btn-carousel carousel'
        slideInterval={10000}
        indicators={false}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.path}
            className='h-full'
            alt='...'
          />
        ))}
      </Carousel>
    </div>
  );
};
