import React from 'react'
import { Button } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCode} />

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input'/> 
                    <Button buttonStyle='btn--outline'> SUBSCRIBE </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wraper'>
                <div className='footer-link-items'>
                    <h2> About us </h2>
                    <Link to='sign-up'> How it works </Link>
                    <Link to='/'> Testimonials </Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Dev {element}
                    </Link>
                    <small className='website-right'> DEV ® 2024 </small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' 
                        to='/' 
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' 
                        to='/' 
                        target='_blank'
                        aria-label='Intagram'>
                        <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link twitter' 
                        to='/' 
                        target='_blank'
                        aria-label='Twitter'>
                        <i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-link linkedin' 
                        to='/' 
                        target='_blank'
                        aria-label='LinkedIn'>
                        <i className='fab fa-linkedin' />
                        </Link>
                        

                    </div>
                </div>
            </div>
        </section>

      
    </div>
  )
}

export default Footer
