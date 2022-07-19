
// import './about.css';
import React from 'react';
import styled from "styled-components"

export default function About(){
    return<ABOUT className="about-page"  id='about'>
        <h1 className="page-header">About me</h1>
        <p>

        My name is Miniar Lasmar. I am a 22 years old web developer and software engineering student. I love challenges and I am keen on seeing my ideas and concepts come to life. I look forward to continue growing and developing the skills I already have, as well as learning new ones!
        </p>
        
    </ABOUT>
}
const   ABOUT=styled.div`
    width: 70vw;
    padding:5rem 0
`