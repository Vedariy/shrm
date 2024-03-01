import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='container content-wrapper footer_inner'>
                    <div className='footer-copyright'>
                        <p>Copyright © 2024 SHRM. All Rights Reserved.</p>
                    </div>
                    <div className='footer-links'>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>
            </div>
            
        </footer>
    );
}

export default Footer;