import React from 'react';
import SkillCard from './skillCard';
// import './skills.css'
import styled from "styled-components"

const skills=[
    {name:'html',
    className:'html',
    image:'https://img.icons8.com/color/344/html-5--v1.png'},
    {
    className:'html',
    name: 'css',
        image:'https://img.icons8.com/color/344/css3.png'
    },
    {
    className:'html',
    name:'javascript',
        image:'https://img.icons8.com/color/344/javascript--v1.png'
    },
    {
    className:'html',
    name:'bootstrap',
        image:'https://img.icons8.com/color/344/bootstrap.png'
    }, {
    className:'html',
    name:'reactjs',
        image:'https://img.icons8.com/color/344/react-native.png'
    }, {
    className:'dotnet',
    name:'asp.net',
        image:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png?20200524033331'
    },{
        className:'pl-sql',
        name:'pl/sql',
        image:'https://my.trocaire.edu/wp-content/uploads/2016/12/pl-sql.png'
    },{
        className:'sql',
        name:'sql',
        image:'https://us.123rf.com/450wm/asnia/asnia1707/asnia170700318/83206225-ic%C3%B4ne-de-base-de-donn%C3%A9es-sql-conception-de-logo-application-ui-ou-ux-inscription-orange-avec-ombre.jpg'
    },{
        className:'php',
        name:'php',
        image:'https://img.icons8.com/officel/344/php-logo.png'
    }

]
export default function Skills(){
    return <Skills_container className="skills" id='skills'>
        <h1>Technologies</h1>
        <div className="skills-container">
            {skills.map((item)=>
                {
                    const key=item.name
                    return(<SkillCard
                    name={item.name}
                    className={item.className}
                    image={item.image}
                    />)
                })}
        </div>
    </Skills_container>
}
const Skills_container=styled.div`
    padding:5rem 0;
    .skills-container{
    display: grid;
    grid-template-columns: repeat(auto-fill,200px);
    grid-gap: 5vw;
}

`