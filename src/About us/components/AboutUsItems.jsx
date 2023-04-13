import { Card } from 'flowbite-react';

const data = [
  {
    text: '@kashrafiq82 i dnt know what im not ready means.',
    username: 'el_capit4n',
    profile_picture: 'https://i.pravatar.cc/300?img=1',
    id: '1813181663',
    full_name: 'Aidan Shah',
  },
  {
    text: '@chelphill someday this boat will be called lopster',
    username: 'a_grillz10',
    profile_picture: 'https://i.pravatar.cc/300?img=2',
    id: '55897168',
    full_name: 'Adam Grillo',
  },
  {
    text: "Omg you're so creative I luh dat name. @a_grillz10",
    username: 'chelphill',
    profile_picture: 'https://i.pravatar.cc/300?img=3',
    id: '176724813',
    full_name: 'Chelsea Phillips',
  },
  {
    text: '@milademadzadeh',
    username: 'mahsa_shabani64',
    profile_picture: 'https://i.pravatar.cc/300?img=5',
    id: '1779523061',
    full_name: 'Mahsa',
  },
];

export const AboutUsItems = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center lg:mx-40 md:grid-cols-4 gap-4 '>
      {data.map((person, index) => (
        <div key={index} className='md:my-4 my-4 md:w-52 md:h-auto'>
          <Card className='md:w-52' imgSrc={person.profile_picture}>
            <div>
              <h5 className='text-base text-center font-semibold tracking-tight text-gray-700 '>
                {person.full_name}
              </h5>
              <h6 className='font-normal text-center text-gray-500'>
                {person.username}
              </h6>
              <div className='mt-4 flex space-x-4 sm:mt-4 justify-center'>
                <a href='#' ><ion-icon name="logo-linkedin" ></ion-icon></a>
                <a href='#' ><ion-icon name="logo-twitter" ></ion-icon></a>
                <a href='#' ><ion-icon name="logo-instagram" ></ion-icon></a>
                <a href='#' ><ion-icon name="logo-facebook" ></ion-icon></a>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
