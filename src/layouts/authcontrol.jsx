import React from 'react'
import Loginleftpane from '../components/loginleftpane'
import Loginrightpane from '../components/loginrightpane'

function authcontrol() {
  return (
   <div className='authpane'>
     <Loginleftpane />
     <Loginrightpane />
   </div>

    
  )
}

export default authcontrol

