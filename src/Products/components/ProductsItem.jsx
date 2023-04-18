
import { aqua, biodigestor } from '../data';
import { SubtitleProduct } from './SubtitleProduct';
import { Product } from './Product';
import { tinacos } from '../data/tinacos';
import { tratamientos } from '../data/tratramientos';

export const ProductsItem = () => {
  return (
    <div id='productos'>
      <h2 className='mb-4 text-3xl mt-20 font-semibold text-center leading-none tracking-tight text-gray-700 md:text-4xl lg:text-5xl'>
        Productos
      </h2>
      <SubtitleProduct title={'Sección Tratatamiento de Agua Pluvial'} />

      <div className='  grid grid-cols-1 place-items-center w-auto md:mx-32 md:grid-cols-3  gap-4'>
        {aqua.map((aquaItems, index) => (
          <Product key={index} data={aquaItems} />
          ))}
      </div>
          <SubtitleProduct title={'Sección Biodigestores'} />
      <div className='  grid grid-cols-1 place-items-center w-auto md:mx-32 md:grid-cols-3  gap-4'>
        {biodigestor.map((bio, index) => (
          <Product key={index} data={bio} />
          ))}
      </div>
        <SubtitleProduct title={'Sección Tinacos y Cisternas'} />
        <div className='  grid grid-cols-1 place-items-center w-auto md:mx-32 md:grid-cols-3  gap-4'>
        {tinacos.map((tina, index) => (
          <Product key={index} data={tina} />
          ))}
      </div>
          <SubtitleProduct title={'Sección Tratamiento Especializado de aguas'} />
        <div className='  grid grid-cols-1 place-items-center w-auto md:mx-32 md:grid-cols-3  gap-4'>
        {tratamientos.map((trata, index) => (
          <Product key={index} data={trata} />
          ))}
      </div>
    </div>
  );
};
