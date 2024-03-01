import React from 'react';
import logo from '../../images/icons/logo.svg';

const Header = ({headerContent}) => {
    return (
        <header className="page-header">
            <div className='container'>
                <img src={logo} alt="shrm logo" onClick={() => window.location.href = '/'}/>
                <div className='page-header__content-wrapper content-wrapper'>{headerContent}</div>
            </div>
        </header>
    );
}

export default Header;