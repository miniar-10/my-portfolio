import React from 'react';
import styled from "styled-components"
// import'./project.css'

export default function ProjectCard({name ,image,technologies,url,demo}){
    return <PROJECT_CARD style={{ backgroundImage: `url(${image})`}} className={ `card-project ${name}`}>
        {/* <img src={image} alt={`${name} overview`}></img> */}
        <button className="primary-btn btn">
           <a href={demo}>
            watch demo </a> 
            <i class="fa fa-play-circle	"></i>
        </button>
        <button className="primary-btn btn">
            <a href={url} target='blank'>View code</a>
            <i class="fa fa-github"></i>
        </button>

        <h2>{name}</h2>
        {technologies.map((item)=><span>{item}</span>)}
    </PROJECT_CARD>

}
const PROJECT_CARD=styled.div`
   position: relative;
    height: 300px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding:3rem 0 2rem;
    background-repeat: no-repeat;
    &:after{
    content: '';
    background-color: rgba(35,35,35,.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    display: none;
    }
    .btn a{
        color:var(--text-white-25);
        text-decoration: none;

    }
    .btn .fa{
        transform: scale(2);
    }
    .btn:hover .fa{
        transform: scale(1.8);
  color: var(--text-white);

    }
    .btn:hover a{
  color: var(--text-white);

}
   
.btn,
 h2,
 span
 {
    z-index: 10;
    color: var(--text-white-25);
    display: none!important;;
}
.btn{
    margin: 16px 0;
}
 h2{
   margin: 40px 0 0;
}
&:hover h2,
&:hover::after,
&:hover .btn,
&:hover span{
display: flex!important;
}

`