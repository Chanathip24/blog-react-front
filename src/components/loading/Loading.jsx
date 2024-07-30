import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import './Load.css'
const Loading = ({loading}) => {
  return (
    <>
    {loading ? 
        <div className='loadcon'>
        <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        </div> : null}

    </>

  )
}

export default Loading