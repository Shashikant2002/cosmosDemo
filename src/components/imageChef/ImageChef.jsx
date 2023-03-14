import React from 'react'

const ImageChef = ({image}) => {
  return (
    <>
        <div className="fullImage">
            <img style={{width: "100%"}} src={image} alt="" />
        </div>
    </>
  )
}

export default ImageChef