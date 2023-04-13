import { useEffect,useState } from "react";

export const GalleryWithSlider = () => {
  //Data
    const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://kvplast.mx/wp-content/uploads/2021/03/gamakv.webp',
    'https://kvplast.mx/wp-content/uploads/2023/01/PORTADA-KVPLAST-WEB_Mesa-de-trabajo-1.jpg'
  ];


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const carouselInterval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(carouselInterval);
    }, []);

    const handlePrevClick = () =>
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );

    const handleNextClick = () =>
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

    return (
      <div
        id='gallery'
        className='relative w-full py-4'
        data-carousel='slide'>
        {/* Carousel wrapper */}
        <div className='relative h-72 overflow-hidden rounded-lg md:h-130'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? '' : 'hidden'
              } duration-2000 ease-in-out`}
              data-carousel-item={activeIndex === index ? 'active' : ''}>
              <img
                src={image}
                className='absolute object-cover block max-w-2/3 h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt=''
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center pt-4'>
          <button
            type='button'
            className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-prev
            onClick={handlePrevClick}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-black dark:text-gray-800'
                fill='none'
                stroke="currentColor"
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-next
            onClick={handleNextClick}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-black dark:text-gray-800'
                fill='none'
                stroke="currentColor"
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>
    );
};
