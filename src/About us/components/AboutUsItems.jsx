import { Card } from 'flowbite-react';
import { teams } from '../data/team';

export const AboutUsItems = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center lg:mx-40 md:grid-cols-4 gap-4 '>
      {teams.map((team, index) => (
        <div key={index} className='md:my-4 my-4 md:w-52 md:h-auto'>
          <Card className='md:w-52 h-72' imgAlt={team.occupations} imgSrc={team.image}>
            <div>
              <h5 className='text-base text-center font-semibold tracking-tight text-gray-700 '>
                {team.occupations}
              </h5>
              <h6 className='font-normal text-center text-gray-500'>
                {team.responsible}
              </h6>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
