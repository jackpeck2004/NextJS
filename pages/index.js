//NextJS Component imports
import Link from 'next/link';
import Router from 'next/router';

//Personal component imports
import Layout from '../Components/Layout';

//This is the page imports
import Home from './home.js';


const Index = () => (
  <div>
    <div className="pannel1index">
      <Layout>
        <Home />
      </Layout>
    </div>

    <style jsx global>{`
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }

      .pannel1index {
        background-image: url(https://images.unsplash.com/photo-1536302829663-a460b9ec95b9?auto=format&fi…aWQiOjEyMDd9&ixlib=rb-0.3.5&q=80&s=973ec41…&w=3155);
        background-size: cover;
        height: 100vh;
      }

      
    `}</style>
  </div>
);

export default Index;
