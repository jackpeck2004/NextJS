import Link from 'next/link';

const Header = () => (
  <div className="container">
    <nav>
      <ul>
        <li className='Logo'>
          <Link href='/'>
            <a>Giacomo Pasin</a>
          </Link>
        </li>
      </ul>
      <ul>  
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/api">
            <a>api</a>
          </Link>
        </li>
      
      </ul>
    </nav>
    <style jsx>{`
      .container {
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: sans-serif;
        background-color: transparent;
        text-transform: uppercase;
      }
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: #3d3d3d;
        font-size: 22px;
        display: block;
        padding: 10px 45px;
        position: relative;
      }

      a:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #3d3d3d;
        transform: scaleX(0);
        transition: all 0.5s;
        transform-origin: left;
      }

      a:hover:before,
      a:hover:after {
        transform: scalex(1);
      }

      a:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #3d3d3d;
        transform: scaleX(0);
        transition: all 0.5s;
        transform-origin: right;
      }

      .Logo{
        justify-content: flex-start;
      }
    `}</style>
  </div>
);

export default Header;