import React from 'react';
import logo from '../../../images/icons/logo.svg';

const HeaderCatalog = () => {
    return (
        <header className="page-header header-catalog">
            <div className='container'>
                <img src={logo} alt="shrm logo" onClick={() => window.location.href = '/'}/>
                <h3>Find the Best AI tool for your Workplace</h3>
            </div>
        </header>
    );
}

export default HeaderCatalog;