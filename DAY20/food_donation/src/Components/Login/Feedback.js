import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import "../Login/Feedback.css";
function Feedback() {
  return (
    <>
    <Navbar/>
    <form class="formm">
    <div class="title">FEEDBACK</div>
    <input type="text" placeholder="Your email" class="input"/>
    <textarea placeholder="Your message"></textarea>
     
    <button>Submit</button>
</form>
<Footer/>
    </>
  )
}

export default Feedback