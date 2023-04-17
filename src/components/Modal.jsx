import { ImageModal, ParagraphProduct, TitleModal} from "./";

export const Modal = ({visible,close,data}) => {

const handleClose = (e)=>{
  if(e.target.id === 'Modal' ) close()
}
  if(!visible) return null

  return (
    <>
      <div
        id='Modal'
        tabIndex='-1'
        aria-hidden='true'
        onClick={handleClose}
        className={`fixed flex overscroll-none justify-center z-50 w-full max-h-full p-4 overflow-x-hidden bg-black bg-opacity-30 backdrop-blur-sm overflow-y-auto inset-0  ${!visible && 'hidden '} `}>
        <div className='relative w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow '>
            <div className='flex items-start justify-between p-3 border-b rounded-t'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {data.name.toUpperCase()}
              </h3>
              <button
                type='button'
                onClick={()=>close()}
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
              {/* Title product */}
              <TitleModal title={data.title1}/>
                {/* Image product */}
              <div className="flex items-center justify-center">
             <ImageModal image={data.image}  alt={data.name}/>
              </div>
              {/* Paragraph product */}
              {
                (data.id == 3 || data.id == 2) ? ( data.parrafo1.map((parrf, index)=>(
                  <ParagraphProduct key={index} paragraph={parrf}/>
                ))):  <ParagraphProduct paragraph={data.parrafo1}/>
              }
             
              <TitleModal title={data.title2}/>
              <ParagraphProduct paragraph={data.parrafo2}/>
              <TitleModal title={data.title3}/>
              <ParagraphProduct paragraph={data.parrafo3}/>
            </div>

            <div className='flex items-center p-6 space-x-2 border-t justify-between border-gray-200 rounded-b dark:border-gray-600'>
              <button
                data-modal-hide='defaultModal'
                type='button'
                onClick={()=>close()}
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                Cerrar
              </button>
              <button
                type='button'
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                <a
                  href={data.doc}
                  download={data.name}>
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
