import Layout from '../Components/Layout';
import { Component } from 'react'
import React from 'react';
import DATABASE from '../Components/GitHubProjects/projectDB.json'
import GitHubProject from '../Components/GitHubProjects/Project'


class Software extends Component {

  state = {
    projects: DATABASE
  }

  render() {
    return (
      <div>
      <div>
        <Layout>
          <br/>
          <div className='pannel1'>
            <p className='header'> Software </p>
          </div>
          <div className='pannel2'>
          <div className=''>
            <GitHubProject news={this.state.projects} />
          </div>
          </div>
        </Layout>
      </div>


      <style jsx global > {
        `
      .pannel1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);
        background-size: cover;
        margin: 0;

      }
      .pannel2 {
        width: 100%;
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
      }
      .readMore {
        text-decoration: none;
        color: white;
        font-weight: lighter;
      }

      .readMore:hover{
        cursor: pointer;
      }
    `
      } </style>
      </div>
    )
  }
}

export default Software;