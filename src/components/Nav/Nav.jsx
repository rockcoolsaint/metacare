import React from 'react'

import "./styles.css";

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <div className='logo'>Metacare</div>
        <div className='email'>rockcoolsaint@metacare.app</div>
      </div>
      <div className='nav__navigation'>
        <div className='nav-menu-item'><div className='icon'><img src="images/team.png" alt='admin'/></div><div className='item-name'>Admin</div></div>
        <div className='nav-menu-item'><div className='icon'><img src="images/check.png" alt='admin'/></div><div className='item-name'>Knowledge Base</div></div>
        <div className='nav-menu-item'><div className='icon'><img src="images/check.png" alt='admin'/></div><div className='item-name'>Train SAM</div></div>
        <div className='nav-menu-item'><div className='icon'><img src="images/schedule.png" alt='admin'/></div><div className='item-name'>Agent Inbox</div></div>
        <div className='nav-menu-item'><div className='icon'><img src="images/clock.png" alt='admin'/></div><div className='item-name'>Help Center</div></div>
        <div className='nav-menu-item'><div className='icon'><img src="images/comments.png" alt='admin'/></div><div className='item-name'>Analytics</div></div>
        <div className='nav-menu-item'><div className='site-map'>Teams</div></div>
        <div className='nav-menu-item'><div className='site-map'>Knowledge</div></div>
        <div className='nav-menu-item'><div className='site-map'>Training SAM</div></div>
        <div className='nav-menu-item'><div className='site-map'>Help Center</div></div>
      </div>
    </div>
  )
}

export default Nav;