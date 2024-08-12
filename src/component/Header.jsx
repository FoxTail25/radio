import React from 'react'
import { ReactComponent as Gear } from '../gears-solid.svg'

const Header = () => {
  return <header>
    <div className='header_text'>
      RadioApp for my phone :)
    </div>

    <Gear className='setting_logo' />

  </header>

}



export default Header