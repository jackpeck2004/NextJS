import Link from 'next/link';

const Logo = () => (
  <div className="container">
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Giacomo Pasin</a>
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
    `}</style>
  </div>
);

export default Logo;