import { Modal } from '../../components';

export const ProductsItem = () => {
  return (
    <div id='productos'>
      <h2 className='mb-4 text-3xl mt-20 font-semibold text-center leading-none tracking-tight text-gray-700 md:text-4xl lg:text-5xl'>
        Productos
      </h2>

      <div className='  grid grid-cols-1 place-items-center w-auto md:mx-32 md:grid-cols-3  gap-4'>
        <div className='max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg'>
          <img src='assets/images/biodigestor.jpg' alt='' />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Biodigestor Autolimpiable
          </p>

          <button
            data-modal-target='defaultModal'
            data-modal-toggle='defaultModal'
            className='block text-gray-700  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'>
            Ver más...
          </button>

          <Modal />
        </div>
        <div className='max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg'>
          <img src='assets/images/biodigestor.jpg' alt='' />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Biodigestor Autolimpiable
          </p>

          <button
            data-modal-target='defaultModal'
            data-modal-toggle='defaultModal'
            className='block text-gray-700  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'>
            Ver más...
          </button>

          <Modal />
        </div>
        <div className='max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg'>
          <img src='assets/images/biodigestor.jpg' alt='' />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Biodigestor Autolimpiable
          </p>

          <button
            data-modal-target='defaultModal'
            data-modal-toggle='defaultModal'
            className='block text-gray-700  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'>
            Ver más...
          </button>

          <Modal />
        </div>
      </div>
    </div>
  );
};
