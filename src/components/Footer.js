import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    return (
        <nav className='footer'>
            <ul className='nav-links'>
                <li>
                    <a href='https://github.com/shustee'>
                        <span className='nav-link'>
                            <FontAwesomeIcon icon={brands('github')} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className='nav-link'>
                            <FontAwesomeIcon icon={brands('twitter')} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className='nav-link'>
                            <FontAwesomeIcon icon={brands('facebook')} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className='nav-link'>
                            <FontAwesomeIcon icon={brands('instagram')} />
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;