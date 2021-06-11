import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <div className='nav'>
        <Link className='nav__title' to='/'>
          Digga Online
        </Link>
        <ul className='nav__links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/second-page'>Second Page</Link>
          </li>
          <li>
            <Link to='/third-page'>Third Page</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
