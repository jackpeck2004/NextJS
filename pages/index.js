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
	      background-image url("https://images.unsplash.com/photo-1547213529-98a94130a2f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80");
        background-size: cover;
        height: 100vh;
      }

      
    `}</style>
  </div>
);

export default Index;
