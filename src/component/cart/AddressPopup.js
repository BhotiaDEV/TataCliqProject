import React from 'react'

const overlay ={
    'z-index':10
}

function AddressPopup({open, onClose}) {
    if(open)
    return (
    <div>
        <div className='overlay'></div>
          <div style={overlay}>
            <label for='address' name='address' >Address</label>
            <input id='address' name='address' placeholder='Delhi' value=''/>
            <button type='submit' >Change Address</button>
          </div>
        <button className='close-button' onClick={()=>onClose}>Change Address</button>
    </div>
  )
  else {
    return null;
  }
}

export default AddressPopup;