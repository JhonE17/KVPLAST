import { Carousel } from 'flowbite-react';

const data = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi nisi ipsum similique at quas amet pariatur, odio accusantium odit sunt provident libero dignissimos adipisci? Ipsam suscipit error voluptate laudantium.',
    username: 'el_capit4n',
    profile_picture: 'https://i.pravatar.cc/300?img=1',
    id: '1813181663',
    full_name: 'Aidan Shah',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi nisi ipsum similique at quas amet pariatur, odio accusantium odit sunt provident libero dignissimos adipisci? Ipsam suscipit error voluptate laudantium.',
    username: 'a_grillz10',
    profile_picture: 'https://i.pravatar.cc/300?img=2',
    id: '55897168',
    full_name: 'Adam Grillo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi nisi ipsum similique at quas amet pariatur, odio accusantium odit sunt provident libero dignissimos adipisci? Ipsam suscipit error voluptate laudantium.',
    username: 'chelphill',
    profile_picture: 'https://i.pravatar.cc/300?img=3',
    id: '176724813',
    full_name: 'Chelsea Phillips',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi nisi ipsum similique at quas amet pariatur, odio accusantium odit sunt provident libero dignissimos adipisci? Ipsam suscipit error voluptate laudantium.',
    username: 'mahsa_shabani64',
    profile_picture: 'https://i.pravatar.cc/300?img=5',
    id: '1779523061',
    full_name: 'Mahsa',
  },
];

export const SuccessStoriesItem = () => {
  return (
    <>
      <h3 className='text-4xl mt-20 font-semibold text-center leading-none tracking-tight bg-gray-400 text-white md:text-5xl lg:text-6xl'>
        Casos de exitos
      </h3>
      <div className='h-56 sm:h-96 xl:h-80 2xl:h-96'>
        <Carousel indicators={false}>
          {data.map((exito, index) => (
            <div
              key={index}
              className='flex md:h-full h-extend flex-col place-content-center items-center content-center justify-center mb-4 bg-gray-400 '>
              
                <img
                  src={exito.profile_picture}
                  className='rounded-full mb-3 w-16 h-16 mt-5 md:w-36 md:h-36 object-cover'
                  alt=''
                />
                <h5 className='text-base px-3 md:mx-40 text-justify font-semibold tracking-tight text-gray-700 '>
                  {exito.text}
                </h5>
                <h5 className='text-3xl text-center font-semibold tracking-tight text-white '>
                {exito.full_name}
              </h5>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
