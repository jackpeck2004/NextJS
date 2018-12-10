import Layout from '../Components/Layout';
import { Component } from 'react'
import React from 'react';
import DATABASE from '../Components/GitHubProjects/projectDB.json'
import GitHubProject from '../Components/GitHubProjects/Project'
import { scroller } from 'react-scroll';
import { Element } from 'react-scroll';
import Link from 'next/link'

class Software extends Component {

  state = {
    projects: DATABASE
  }

  render(){

  }

  render() {
    const scrollToElement = (element) => {
      scroller.scrollTo(element,{
        duration: 1000,
        delay: 10,
        offset: 0,
        smooth: true
      });
    }
    return (
      <div>
      <div>
        <Layout>
          <br/>
          <div className='backgroundImg'>
            <div className='pannel1'>
              <p className='header'> Software </p>
           </div>
           <div className='pannel1__readMore'>
           <Link>
              <a className="readMore" onClick={()=>scrollToElement('github')}> Read More</a>
            </Link>
            </div>
          </div>
          <Element name='github'>
          <div className='pannel2'>
          <div className=''>
            <GitHubProject news={this.state.projects} />
          </div>
          </div>
          </Element>
        </Layout>
      </div>


      <style jsx global > {
        `

      .backgroundImg{
        background-image: url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);
        background-size: cover;
      }
      .pannel1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85vh;
        margin: 0;
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
        font-weight: lighter;
      }
    
      .pannel2 {
        margin: 0;
        padding: 0;
        background: transparent;
        
      }
      .header {
        font-size: 80px;
        font-family: arial;
        letter-spacing: 20px;
        text-transform: uppercase;
        color: white;
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
        font-weight: lighter;
      }
      .readMore {
        text-decoration: none;
        color: white;
        font-weight: lighter;
        font-family: sans-serif;
      }

      .readMore:hover{
        cursor: pointer;
      }

      @media only screen and (min-width: 2000px) {
        .pannel2 {
          display:flex;
          justify-content: center;
          align-items: center;
          margin-right: 12.5%;
          padding: 0;
        }
      }
    `
      } </style>
      </div>
    )
  }
}

export default Software;