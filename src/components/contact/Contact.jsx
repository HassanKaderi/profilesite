import "./contact.scss"
import { useState } from "react";

export default function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
      <div className="wrapper">
          <h1>Feel free to Contact me,</h1>
          <h3>I respond to emails while fletching in RuneScape.</h3>
        </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Email Here"/>
          <textarea placeholder="Dear Hassan, I like what you do pls work for me."></textarea>
          <button type="submit">Send!</button>
          {message && <span>This doesnt work <b>YET</b>, I will get it up and ready asap!</span>}
        </form>
        </div>
    </div>
  )
}
