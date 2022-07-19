import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from "styled-components"
export default function Contact(){
    const [state, handleSubmit] = useForm("myyoqvlv");
  if (state.succeeded) {
      return<CONTACT className='thx-div' id='contact'>
       <h1 className='web-dvp'>Thanks for contacting me!</h1>;

      </CONTACT>
  }
    return <CONTACT className="contact" id='contact'>
        <div className='desciprtion'>
        <h1 className='web-dvp'> Interested in working with me?</h1>
        <p className='contact-paragraph'>Challenge me. I want to work with you to create amazing projects</p>
        </div>

  

        <form action="https://formspree.io/f/myyoqvlv" onSubmit={handleSubmit} method="post">
            <div className="form-group">
            <label htmlFor="name">What is your name</label>
            <input type="text" name='name' id='name'/>
            </div>
            <div className="form-group">
            <label htmlFor="mail">What is your email</label>
            <input type="email" mail='email' id='mail'  />
            </div><div className="form-group">
            <label htmlFor="text">Type your message</label>
            <input type="text" name='message' id='text' />
            </div>
            <button type="submit" disabled={state.submitting} className="primary-btn btn">
                
               Send message<i className="fa fa-paper-plane" aria-hidden="true"></i></button>
            
        </form>
       
       
    </CONTACT>
}
const CONTACT=styled.div`
  padding:5rem 0;
    display: flex;
    flex-direction: row;
    padding: 3rem 0;
    color:var(--text-black-50);
    .desciprtion{
    width:30vw;
    margin-bottom: 16px;
}
.desciprtion h1{
        margin:0 1rem 0 0 ;
        font-size:2.5rem

}
.desciprtion p{
    margin: 0;
    line-height: 1.4rem;
}
.btn{
   
   /* align-self: baseline; */
   justify-self: right;
   align-self: flex-end;
   margin: 0 5rem 0;
}


 a{
    color: var(--text-white-25);
    text-decoration: none;
}
form{
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8vw;
    justify-content: right;
}
.form-group{
    display: flex;
    flex-direction: column;
    margin-bottom:32px;
}
.form-group input{
    width:45vw;
    height: 7vh;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #e3e5ea;
    border-bottom:  1px solid #5251518f;
}
.contact-paragraph{
    margin-top: 16px!important;
}
a{
    color:var(--text-white-25);
    text-decoration: none;
}

`