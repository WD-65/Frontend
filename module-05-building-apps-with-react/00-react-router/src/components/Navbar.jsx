import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          Home
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
