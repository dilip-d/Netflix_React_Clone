import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt='Netflix logo'/>
        <img className='avatar' src='https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png' alt='Avatar'></img>
    </div>
  )
}

export default NavBar