import React , {useState} from 'react';
import './Footer.css';
import {Button} from './../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {

  const [clicked , setClicked] = useState(false);
  const [mail, setMail] = useState('');

  const checkClick = () =>{
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(!emailRegex.test(mail))
    {
      setClicked(false);
    }
    else setClicked(true);
  };

  const handleSubmit = event =>{
    event.preventDefault();
    const mailer = mail;
    const res = fetch(
      'https://restaurant-18d8d-default-rtdb.firebaseio.com/userSubscription.json',
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          mailer
        })
    }
    );

    if(res){
      setMail('');
    }
    else{
      setClicked(false)
    }
  }
  

  return (
    <div className='footer-container' id='contactPage'>
      <div className={clicked ? 'footer-subscription-vanish' : 'footer-subscription'}>
        <p className='footer-subscription-heading'>
          Join the newsletter to know sales and events at our resturant.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange={event => setMail(event.target.value)}
            />
            <Button buttonStyle='btn--outline' onClick={checkClick}>Subscribe</Button>
          </form>
        </div>
      </div>
      <p className={clicked ? 'footer-subscription': 'vanish'}>Thank you for subscribing !!!</p>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <p>Started in 2024</p>
            <p>Have about 50+ centers</p>
            <p>Spread across the World</p>
          </div>
          <div class='footer-link-items'>
            <h2>Locations</h2>
            <p>United Kingdom</p>
            <p>Japan</p>
            <p>Cannada</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>bilingo@gmail.com</p>
            <p>+91 8003717845</p>
            <p>+0831 9078</p>
          </div>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bilingo
              <i class='fas fa-wind' />
            </Link>
          </div>
          <small class='website-rights'>COPYRIGHTS © AYESHA MULLA 2023. All rights reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/ayesha-m-432698227'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://github.com/AyeshaMulla369'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;