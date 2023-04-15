import { Carousel } from 'flowbite-react';
import  {successStoriesItem}  from './data/successStories';




export const SuccessStoriesItem = () => {
  return (
    <>
      <h3 className='text-3xl mt-20 font-semibold text-center leading-none tracking-tight bg-gray-300 text-gray-700 md:text-4xl lg:text-5xl'>
        Casos de exitos
      </h3>
      <div className='h-56 sm:h-96 xl:h-80 2xl:h-96'>
        <Carousel >
          {successStoriesItem.map((exito, index) => (
            <div
              key={index}
              className='flex md:h-full h-extend flex-col place-content-center items-center content-center justify-center mb-4 bg-gray-300 '>
              
                <img
                  src={exito.profile_picture}
                  className='rounded-full mb-3 w-16 h-16 mt-5 md:w-36 md:h-36 object-cover'
                  alt={exito.full_name}
                />
                <h5 className='md:text-base text-sm px-3 md:mx-40 text-justify font-semibold tracking-tight text-gray-600 '>
                  {exito.text}
                </h5>
                <h5 className='md:text-3xl text-lg text-center font-semibold tracking-tight text-gray-700 '>
                {exito.full_name}
              </h5>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};