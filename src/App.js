import { useState ,useEffect } from "react";
import Home from './Home';
import About from './About';
import Skills from './skills';
import Projects from './Projects';
import Contact from './contact';
import styled from "styled-components"

function App() {
  const [Mobile,setMobile]=useState(false);
  const [Dark,setDark]=useState(false);
  return (
    <APP>
      <div  className= {Dark?'dark App':'light App'}>

      <header className="App-header">
        <nav className='nav-bar'>
          <div className="nav-bar-div">
          <div className="logo">miniar</div>
          <ul  className={Mobile?'list-for-mobile':'nav-bar-menu'}onClick={()=>setMobile(false)}>
            <li className="navbar-menu-item"  style={{"cursor":"pointer"}} 
                                              onClick={() => {
                                               const anchor = document.querySelector('#about')
                                               anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                              }}>About </li>
            <li className="navbar-menu-item"  style={{"cursor":"pointer"}} 
                                              onClick={() => {
                                               const anchor = document.querySelector('#skills')
                                               anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                              }}>Technologies</li>
            <li className="navbar-menu-item"  style={{"cursor":"pointer"}} 
                                              onClick={() => {
                                               const anchor = document.querySelector('#projects')
                                               anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                              }}>Projects</li>
            <li className="navbar-menu-item"  style={{"cursor":"pointer"}} 
                                              onClick={() => {
                                               const anchor = document.querySelector('#contact')
                                               anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                              }}>Contact</li>
          </ul>
          <button className='toggle-btn' onClick={()=>setMobile(!Mobile)}>
                    {Mobile?<i class="fa fa-times" aria-hidden="true"></i>:<i class="fa fa-bars" aria-hidden="true"></i>}
          </button>
          <button style={{"cursor":"pointer"}} 
                                              onClick={() => {
                                               const anchor = document.querySelector('#contact')
                                               anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                              }} className="primary-btn btn contact-btn">Contact me
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
          </div>
        </nav>
      </header>
      <Home/>
      <About/>
      <Skills id='skills'/>
      <Projects id='projects'/>
      <Contact id='contact'/>
      <div className="contact-icons">
      <div className = "contact-icon mode-switcher" onClick={()=>{setDark(!Dark)}}>
      <i class="fa fa-adjust"></i>
      </div>
        <div className="contact-icon">

          
            <a href="https://www.linkedin.com/in/miniar-lasmar-5842291b4/" target='blank'>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
      </div>        
      <div className="contact-icon">
        <a href="mailto: lasmar.miniar9@gmail.com">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <div className="contact-icon">
        <a href='https://github.com/miniar-10' target='blank'>
        <i class="fa fa-github"></i>
        </a>
      </div>
      
      </div>
      </div>

    </APP>
  );
}

const APP=styled.div`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  .light{
  padding:0 5rem;
  background-color: var(--light-background-color);

  }
  .dark{
  background-color:var(--dark-background-color);
  padding:0 5rem;

}
.dark .nav-bar{
  background-color: rgba(64 ,64 ,73 ,.9);
}

.nav-bar{

position: fixed;
height: 64px;
width: 90vw;
background-color: rgba(227,229,231,.9);
z-index: 20;
/* opacity: .5; */
}
.nav-bar-div{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  font-weight: 500;
}
.logo{
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
    color: var(--primary-color);
}
.nav-bar-menu{
display: flex;
flex-direction: row;
justify-content: space-between;
width: 45%;
align-items: center;

}

.navbar-menu-item{
  list-style: none;
}
.dark .navbar-menu-item{
  color:var(--text-white-25)
}
.navbar-menu-item {
  color:var(--text-black-50);
text-decoration: none;
padding-bottom: 0.2rem;
}
.nav-bar-menu .navbar-menu-item:hover {
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
}
.dark .nav-bar-menu .navbar-menu-item:hover {
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn{
  width: 156px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:12px 24px;
  border-radius: 24px;
  background-color: var(--primary-color);
  color: var(--text-white-25);
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  /* font-size: 16px; */
}

.btn:hover{
  color: var(--text-white);

}
.primary-btn:hover i{
  transform: scale(1.24);
}


.contact-icons{
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top:32vh;
  right:24px;
  z-index: 1000;
 
}
.dark .contact-icon{

}
.contact-icon{
  background-color: var(--secncary-color);
  border-radius: 50%;
 padding: 16px 18px;
 margin: 8px;


}
.contact-icon .fa{
  color: var(--text-black-50);
 transform: scale(1.2);

 /* opacity: .8; */


}
/* .dark .contact-icon .fa{
  color: var(--text-white-25)
}
.dark .contact-icon:hover .fa{
  color: var(--text-white)

} */

.contact-icon:hover .fa{
  /* transform: scale(2.2); */
  color: var(--text-black-75);
  /* opacity: 1; */
 
 }
 .dark .contact{
    color:var(--text-white-50)
}
 .toggle-btn{
  /* padding: 12px 40px; */
  position: relative;
  right: 5rem;

   border-radius: 5px;
   /* font-size: 28px; */
   background: transparent;
   color: var(--primary-color);
   border: none;
   display: none;
   /* display: none; */
}
.fa-bars{
  transform: scalex(1.5);
}
.dark .mode-switcher{
  transform: rotate(180deg);
}
.light .mode-switcher{
  transform: rotate(360deg);

}
.dark input{
    background-color: var(--dark-background-color);
    border-bottom: 1px solid var(--text-white-75);
    color:var(--text-white-25)
}
.dark input&:focus{
  all:unset
}
@media (max-width:700px) {
   
  .nav-bar-menu{
      display: none;
  }
  .primary-btn{
      display: none;
  }
  .toggle-btn{
      display: block;
  }
  .list-for-mobile{
      display: flex;
      margin-top: 0;
      flex-direction: column;
      justify-content: space-evenly;
      background: var(--primary-color);
      z-index: 100;
      top:0;
      left: -5rem;
      width: 50vw;
      height: 100vh;
      position: absolute;
      align-items: flex-start;
      padding: 0;
  }
  .list-for-mobile .navbar-menu-item{
    position: relative;
    width: 50vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-white-25);

  }
  .navbar-menu-item a{

  }
  .list-for-mobile li{
    /* position: absolute;
    width: 100%;
    height: 100%; */
      padding:2em;
      /* height: ; */
      text-align: center;
      width: 50vw;
      text-justify: center;
   
  }  
  .list-for-mobile .navbar-menu-item:hover{
      background-color: var(--secncary-color);
      color:var(--text-white)
      /* color:var(--text-black-50) */
  }
  .list-for-mobile .navbar-menu-item:hover .navbar-menu-item{
    /* background-color: var(--secncary-color); */
    color:var(--text-black-50)
}
  .list-for-mobile .navbar-menu-item:hover::after{
      /* color: #f00; */
      display: none;
  }
  

 
}
.dark h1{
  color: var(--text-white-25);
}
.dark .card-skill{
     background-color: #646470;
    color:var(--text-white-25)
}
.dark .header{
    color:var(--text-white)
}

.dark .web-dvp{
    color:var(--text-white-50)
}

.dark p{
    color:var(--text-white-50)
}
`

export default App;
