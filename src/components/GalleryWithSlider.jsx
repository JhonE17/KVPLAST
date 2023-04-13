import { Carousel } from 'flowbite-react';

//Data
const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://kvplast.mx/wp-content/uploads/2021/03/gamakv.webp',
  'https://kvplast.mx/wp-content/uploads/2023/01/PORTADA-KVPLAST-WEB_Mesa-de-trabajo-1.jpg',
];

export const GalleryWithSlider = () => {
  return (
    <div className='h-72 mt-2 overflow-hidden rounded-lg md:h-130'>
      <Carousel>
        {images.map((image, index) => (
        <div key={index} className='sm:max-w-full md:max-w-2/3 h-auto'>

            <img  src={image} className=' ' alt='...' />
        </div>
        ))}
      </Carousel>
    </div>
  );
};
