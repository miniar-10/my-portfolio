import React from 'react';
import SkillCard from './skillCard';
import * as data from './projectsdata'
import ProjectCard from './ProjectCard';
import styled from "styled-components"

export default function Projects(){
    return <PROJECTS className="projects" id='projects'>
        <h1>My recent projects</h1>
        <div className="projects-container">
            {data.projectsData.map((item)=>
                {
                    const key=item.name
                    console.log(item)
                    return(<ProjectCard
                    name={item.name}
                    technologies={item.technos}
                    image={item.img}
                    url={item.url}
                    demo={item.demo}
                    />)
                })}
        </div>
    </PROJECTS>
}
const PROJECTS=styled.div`
    padding:5rem 0 ;
    .projects-container{
    display: grid;
    grid-template-columns: repeat(auto-fill,520px);
    grid-gap:32px
    }
    

`