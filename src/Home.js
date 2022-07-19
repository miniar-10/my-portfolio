
import Recat, { useState ,useEffect } from "react";
import styled from 'styled-components'
export default function Home(){
    return <HOME className="home">
        <p className="hello">Hello my name is</p>
        <h1 className="name header">Miniar Lasmar</h1>
        <h2 className="web-dvp header">I am a web developer</h2>
        <p className="my-description">I am a full-stack web developer(React js, ASP.NET), I have a decent experience of creating good-looking responsive websites. So if your main focus is your clients satisfaction and positive feedback, you are choosing the right person for the job. Just let me know via a message. 
        </p>
        <button className="btn secondary-btn see-work-btn">See my work<i class="fa fa-angle-right" aria-hidden="true"></i></button>
    </HOME>
}
const HOME=styled.div`
 width: 70vw;
padding:5rem 0;
.header{
    font-size: 6vw;
    font-size: 6vw;
    margin: 0;
    color: var(--text-black);
}
.web-dvp{
    color: var(--text-black-50);
    font-size: 5vw;
}
p{
    font-size: 20px;
    color: var(--text-black-50);

}
.fa-angle-right:before {
    /* content: "\f105"; */
    font-size: 20px;
}
 .secondary-btn:hover .fa{
  transform: translateX(4px);
} 
`
