import React, { Component } from 'react'

const GitHubProjectItem = ({ item }) => {
    return ( 
    <div className = 'ghProject' >
        <p className='projectHeader'>{item.name} <strong>|</strong> {item.main_language}</p> 
        <div className='description'>
                <p>{item.description}</p>
         </div>
            <div className='skills'>
                <p>Develoed Skills: {item.other_languages}</p>
            </div>
        <style jsx global > {
                `
                .ghProject{
                    background: transparent;
                    height: 100%;
                    min-height: 100%;
                    color: black;
                    font-family: sans-serif;
                    width: 150%;
                    text-align: center;
                    border: 1px solid black;
                    margin-bottom: 10vh;
                    padding-bottom: 10vh;
                    transition: all .2s ease-in-out;
                    border-radius: 12px;
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
                 `
      } </style>
    </div>
    )
}

export default GitHubProjectItem;