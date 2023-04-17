import React from 'react'

export const ImageModal = ({image, alt}) => {
  return (
    <img className="w-auto h-96" src={image} alt={alt} />
  )
}
