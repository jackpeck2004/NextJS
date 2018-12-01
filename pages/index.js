//NextJS Component imports
import Link from 'next/link';
import Router from 'next/router';

//Personal component imports
import Layout from '../Components/Layout';

//This is the page imports
import Home from './home.js';


const Index = () => (
  <div>
    <Layout>
      <Home />
    </Layout>

    <style jsx global>{`
    body{
      font-family: sans-serif;
    }
    `}</style>
  </div>
);

export default Index;
