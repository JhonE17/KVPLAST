import { useState } from "react";
import { Modal } from "../../components";


export const Product = ({data}) => {
    const [showModal, setShowModal] = useState(false)
    const onClose = ()=> setShowModal(false)
  return (
    <div className='max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg'>
    <img className="drop-shadow-[8px_8px_5px_rgba(48,204,210,0.6)] w-72 object-contain h-72" src={data.image} alt='' />
    <p className='mb-3 mt-3 font-normal text-xl text-gray-700 dark:text-gray-400'>
     <b> {data.name}</b>
    </p>

    <button
      data-modal-target='defaultModal'
      data-modal-toggle='defaultModal'
      className='block text-white bg-grey  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      type='button'
      onClick={()=>setShowModal(true)}>
      Ver más...
    </button>

    <Modal visible={showModal} data={data} close={onClose}/>
  </div>
  )
}
