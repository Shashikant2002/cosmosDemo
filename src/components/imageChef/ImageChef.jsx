import React from 'react'

const ImageChef = ({image}) => {
  return (
    <>
        <div className="fullImage">
            <img src={image} alt="" />
        </div>
    </>
  )
}

export default ImageChef