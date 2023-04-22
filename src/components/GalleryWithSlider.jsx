import { Carousel } from 'flowbite-react';

//Data
const images = [
  {
    path: 'assets/images/02.jpg',
    text: '¡Tecnología lodos activados y aereación extendida!',
    textBold: 'Plantas de Tratamiento de Aguas Residuales',
  },
  { path: 'assets/images/03.jpg', text: '¡Pregunta a nuestro equipo asesor!', textBold: 'Tinacos en capacidad mínimas y máximas a precios accesibles' },
  { path: 'assets/images/biodigestordual.png', text: '', textBold: 'Biodigestores' },
  { path: 'assets/images/01.jpeg', text: '', textBold: 'Plantas de tratamiento de aguas residuales tipo paquete (móviles)' },
  {
    path: 'assets/images/biodigestor-autolimpiable.png',
    text: '',
    textBold: 'Biodigestores Móviles',
  },
  { path: 'assets/images/06.jpg', text: '', textBold: 'Tratamiento Especializado Agua Pluvial' },
  { path: 'assets/images/07.jpg', text: '', textBold: 'Tratamiento Especializado Agua Pluvial' },
];

export const GalleryWithSlider = () => {
  return (
    <div className='h-96 overflow-hidden overscroll-none rounded-lg md:h-138'>
      <Carousel className='btn-carousel'  slideInterval={10000} indicators={false} >
        {images.map((image, index) => (
          <div key={index} className='sm:max-w-full md:max-w-60 h-auto'>
            <img src={image.path} className='' alt='...' />
            <div className='flex mx-2 justify-center h-12 py-2'>
              <span className='md:text-lg text-sm text-left justify-center font-extrabold tracking-tight text-gray-600 '>
                {image.textBold} <span className='font-normal'>{image.text}</span>
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
