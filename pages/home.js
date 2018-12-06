import Link from 'next/link';
import { scroller } from 'react-scroll';
import { Element } from 'react-scroll';

const Home = () => { 

  const scrollToElement = (element) => {
    scroller.scrollTo(element,{
      duration: 1000,
      delay:10,
      smooth: true,
      offset: 0
    });
  }
  
  return(
  <div>
    <div className="pannel1">
      <p className="header">Giacomo Pasin</p>
    </div>
    <div className="pannel1__readMore">
      <Link >
        < a className = "readMore"
        onClick = {
          () => scrollToElement('pannel2')
        } >
          Read More
        </a>
      </Link>
    </div>
    <Element name='pannel2'>
      <div className="pannel2" >
        <h1>About me</h1>
      </div>
    </Element>
    <style jsx global>{`
      .pannel1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85vh;
      }
      .pannel2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .header {
        font-size: 80px;
        font-family: arial;
        letter-spacing: 20px;
        text-transform: uppercase;
        color: black;
      }

      .pannel1__readMore {
        text-transform: uppercase;
        font-size: 30px;
        display: flex;
        height: 15vh;
        padding-top: 0;
        align-items: center;
        justify-content: center;
        color: whitesmoke;
        letter-spacing: 20px;
      }
      .readMore {
        text-decoration: none;
        color: white;
        font-weight: lighter;
      }

      .readMore:hover{
        cursor: pointer;
      }
    `}</style>
  </div>
);}

export default Home;
