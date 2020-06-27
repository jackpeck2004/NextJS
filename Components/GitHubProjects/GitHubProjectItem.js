import React, { Component } from 'react'
import Link from 'next/link'

const GitHubProjectItem = ({ item }) => {
    return (
        <Link href={item.link}>
        <a className='link'>
    <div className = 'ghProject' >
        <p className='projectHeader'>{item.name} <strong>|</strong> {item.main_language}</p> 
        <div className='description'>
                <p>{item.description}</p>
         </div>
            <div className='skills'>
                <p>Develped Languages: {item.main_language}, {item.other_languages}</p>
            </div>
        <style jsx global > {
                `
                .ghProject{
                    background: transparent;
                    color: black;
                    font-family: sans-serif;
                    width: 200%;
                    text-align: center;
                    border: 1px solid black;
                    margin-bottom: 10vh;
                    padding-bottom: 10vh;
                    transition: all .2s ease-in-out;
                    border-radius: 12px;
                }

                .link{
                    text-decoration: none;
                }


                strong{
                    font-size: 40px;
                    font-weight: lighter;
                }

                .ghProject:hover{
                    transform: scale(1.1);
                }
                
                .description{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .projectHeader{
                    text-align: center;
                    font-size: 30px;
                }

                @media only screen and (min-width: 1350px) {
                    .pannel2{
                    }
                  }
                 `
      } </style>
    </div>
    </a>
    </Link>
    )
}

export default GitHubProjectItem;