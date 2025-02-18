import { ChangeEvent, FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const handleSearch = async() => {
    navigate(`/search?plant=${searchTerm}`);
    setSearchTerm('');
  };

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearchButtonClick = () => {
    handleSearch();
  };

  return (
    <div className="navbar bg-base-300 p-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><a href='/login'>Login</a></li>
            <li><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Spawn Your Lawn
        </Link>
      </div>
      <div className='navbar-end'>
        <div className="form-control mr-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full focus:text-white focus:border-primary focus:outline-primary hover:border-secondary"
              value={searchTerm}
              onChange={onSearchInputChange}
            />
            <button className="btn btn-square hover:text-primary" onClick={onSearchButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
