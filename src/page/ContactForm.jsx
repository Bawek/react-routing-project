import React from 'react'

const ContactForm = () => {
  return (
<form className='contact-form' onSubmit={(e)=>(e.preventDefault)}>
<input type='email' placeholder='please ener Email' />
<input type='password' placeholder='please ener password' />
<input type='submit' value='submit' />



</form>  )
}

export default ContactForm