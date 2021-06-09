import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <div className='nav'>
        <ul>
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
