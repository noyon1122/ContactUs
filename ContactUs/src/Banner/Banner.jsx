import './Banner.css'
import  { useRef, useState } from 'react';
const Banner = () => {
    const nameref=useRef(null);
    const emailref=useRef(null);
    const textref=useRef(null)
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(textref.current.value);
       

       

    }
    console.log(name);
  return (
    <div className='banner_container'>

       <div className='left_side'>
       <div className='btn_div'>
          <button className='btn_container'>VIA SUPPORT CHAT</button>
          <button className='btn_container'>VIA CALL</button>
        </div>
        <div className='email_div'>
           <p> VIA EMAIL FORM</p>
        </div>
        <div >
       <form onSubmit={handleSubmit}>

       <div className='form_control'>
            <label htmlFor="name">Name</label>
            <input ref={nameref} type="text" name="name" />
          </div>

          <div className='form_control'>
            <label htmlFor="name">email</label>
            <input ref={emailref} type="text" name="email" />
          </div>
          <div className='form_control'>
            <label htmlFor="text_area">Text</label>
          <textarea ref={textref} name="text_area" id=""></textarea>
          </div>
        <div className='btn_submit'> <input type="submit" value="Submit" /></div>
       </form>

         
        </div>
         
       </div>
        <div className='img_container'>
        <img src="../../public/images/contact.svg" alt="" />
        </div>
    </div>
  )
}

export default Banner