import React from 'react'
import GitHubProjectItem from './GitHubProjectItem'

const GitHubProject = (props) => {

    const items = props.news.map((item) => {
        return ( 
        <GitHubProjectItem key={item.id} item={item}/>
        )
    })
    return (
        <div className='div'>
        <div className='project'> 
            {props.children} 
            {items} 
        </div>

        <style jsx global > {
            `
            .div{
                display:flex;
                padding: 15%;
                align-items:center;
                height:100%;
            }
                 `
        } </style>
        </div>
    )

}

export default GitHubProject;