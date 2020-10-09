import React from 'react'
import './contact.css';
 let contact=()=> {
    return (
        <div className='contact' id='contact'>
            
            <form id="contact" action method="post">
            <h1><i className='fa fa-envelope pr-2' />Write to Me 😄</h1>
         
          <fieldset>
            <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex={2} required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number" type="tel" tabIndex={3} required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your Message Here...." tabIndex={5} required defaultValue={""} />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
        </div>
    )
}
export default contact;