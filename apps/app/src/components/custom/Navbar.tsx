import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);
  const [toggleM, setToggleM] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    setTimeout(() => {
      navigate('/welcome');
    }, 5000);
  };

  return (
    <div className="bg-base-200 py-2">
      <div className="max-w-7xl mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/movies">Peliculas</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
              <li>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="input input-bordered input-primary w-full"
                  />
                </div>
              </li>
              <div className="dropdown dropdown-end relative">
                <label className="btn btn-ghost btn-circle avatar top-0 left-0">
                  <img
                    className="w-10 rounded-full"
                    onClick={(e) => setToggleM((e) => !e)}
                    src="https://placeimg.com/80/80/people"
                  />
                </label>
                {toggleM && (
                  <ul className="mt-3 p-2 shadow menu menu-compact absolute z-[1000] bg-base-100 rounded-box w-52 lg:hidden">
                    <li>
                      <Link to={'/user/profile'} className="justify-between">
                        Perfil
                        <span className="badge">Nuevo</span>
                      </Link>
                    </li>
                    <li>
                      <a>Configuracion</a>
                    </li>
                    <li onClick={logout}>
                      <a>Cerrar Sesion</a>
                    </li>
                    <li>
                      <Link to={'/movie/new'}>Añadir Peliculas</Link>
                    </li>
                    <li>
                      <Link to={'/serie/new'}>Añadir Series</Link>
                    </li>
                  </ul>
                )}
              </div>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">
            Popflix
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/movies">Peliculas</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>

            <div className="dropdown dropdown-end relative">
              <label className="btn btn-ghost btn-circle avatar top-0 left-0">
                <img
                  className="w-10 rounded-full"
                  onClick={(e) => setToggle((e) => !e)}
                  src="https://placeimg.com/80/80/people"
                />
              </label>
              {toggle && (
                <ul className="mt-3 p-2 shadow menu menu-compact absolute z-[1000]  bg-base-100 rounded-box w-52">
                  <li>
                    <Link to={'/user/profile'} className="justify-between">
                      Perfil
                      <span className="badge">Nuevo</span>
                    </Link>
                  </li>
                  <li>
                    <a>Configuracion</a>
                  </li>
                  <li onClick={logout}>
                    <a>Cerrar Sesion</a>
                  </li>
                  <li>
                    <Link to={'/movie/new'}>Añadir Peliculas</Link>
                  </li>
                  <li>
                    <Link to={'/serie/new'}>Añadir Series</Link>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
