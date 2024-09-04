import React , {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6yb339e', 'template_7m9temu', form.current, {
            publicKey: 'iB_QI2t3Du_Q0YsM2',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
          <div>
            <span className='stroke-text'>READY TO </span>
            <span> LEVEL UP</span>
         </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'> WITH US ?</span>
         </div>
        </div>
        
        <div className="right-j">
            <form ref={form} onSubmit={sendEmail}className="email-container">
                <input type="email" name='user_email' placeholder='Enter Your Email'/>
           <button className='btn-btn-j'>Join now</button>
           </form>
        </div>
    </div>
  )
}

export default Join