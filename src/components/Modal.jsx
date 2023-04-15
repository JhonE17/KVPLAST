export const Modal = () => {
  return (
    <>
      <div
        id='defaultModal'
        tabIndex='-1'
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full'>
        <div className='relative w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow '>
            <div className='flex items-start justify-between p-4 border-b rounded-t'>
              <h3 className='text-xl font-semibold text-gray-900'>
                BIODIGESTOR BIO-VK 1400
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='defaultModal'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <div className='p-6 space-y-6'>
              <h4 className='text-2xl leading-relaxed text-center text-gray-500 dark:text-gray-400'>
                ESQUEMA DE FUNCIONAMIENTO
              </h4>
              <img src='assets/images/esquemafunciona.jpg' alt='' />
              <h4 className='text-2xl leading-relaxed text-center text-gray-500 dark:text-gray-400'>
                FUNCIONAMIENTO
              </h4>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                Cuando el sistema <b>BIO-VK 1400</b> recibe una descarga entra
                por el ducto (#1), almacenándose en la <b>CAM #1</b> y
                posteriormente,<b>CAM #2</b>y<b>CAM #3</b>respectivamente. Este
                proceso permite la degradación del sólido, transformándolo en
                lodo, logrando la limpieza del líquido.
                <br />
                <br />
                Las divisiones interiores o mamparas (#2) realizan la separación
                de los desechos sólidos y permiten el flujo del líquido para
                evitar que se mezclen entre ellos. Posteriormente, el líquido
                pasa por el Filtro Geotextil - Mineral (#3) para retener
                cualquier partícula restante y evitar que llegue a la salida
                (#4), de esta forma el líquido estará libre de sedimentos,
                biodigerido y clarificado.
                <br />
                <br />
                La salida de lodos (#5) permite el retiro de los sedimentos.
                Recomendable cada 6 a 8 meses.
              </p>
            </div>

            <div className='flex items-center p-6 space-x-2 border-t justify-between border-gray-200 rounded-b dark:border-gray-600'>
              <button
                data-modal-hide='defaultModal'
                type='button'
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                Cerrar
              </button>
              <button
                type='button'
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                <a
                  href='assets/docs/BIODIGESTOR KVPLAST.pdf'
                  download={'Biodigestor'}>
                  Descargar
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
