import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'

function QrCard() {
  
  const {qr} = useContext(GlobalContext)
  
  return (
    <div className='container d-flex align-center justify-content-center mt-5'>
        <img src={qr} className="img-thumbnail" alt="Type Something"></img>
    </div>
  )
}

export default QrCard