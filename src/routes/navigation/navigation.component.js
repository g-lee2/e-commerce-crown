import { Outlet } from 'react-router-dom';
import { Fragment, Link } from 'react';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>logo</div>
        </Link>
        {/* <div className='nav-links-container'> 
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div> */}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
