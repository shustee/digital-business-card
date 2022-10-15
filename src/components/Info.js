import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Info() {
    return (
        <div className='info'>
            <img src='assets/images/cs-headshot.jpg' alt='Professional headshot' className='headshot' />
            <h1>Chris Shuster</h1>
            <h3>Full-Stack Developer</h3>
            <p>cshuster.website</p>
            <div className='contact-btns'>
                <a href='mailto:cshustee@gmail.com' className='email-btn'>
                    <span className='email-icon'>
                        <FontAwesomeIcon icon={solid('envelope')} />
                    </span>
                    Email
                </a>
                <a href='https://www.linkedin.com/in/cshuster' className='linkedin-btn'>
                    <span className='linkedin-icon'>
                        <FontAwesomeIcon icon={brands('linkedin')} />
                    </span>
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Info;