import React from 'react';
import styled from "styled-components"

export default function SkillCard({name ,className,image}){
    return <Card className={ `card-skill ${className}`}>
        <img src={image} alt={`${name} icon`}></img>
        <h3>{name}</h3>
    </Card>
}
const Card=styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f2f5;
    color: var(--text-black-50);
    border-radius: 6px;
    padding:10px;
    img{
        height: 150px;
    width: 150px;
    }
    .dotnet img,
    .sql img{
    height: 150px;
    width: 130px;
    margin-top: 20px;
    margin-bottom: 10px;
}
`