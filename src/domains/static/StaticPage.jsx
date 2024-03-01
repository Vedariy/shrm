import React from 'react';
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const StaticPage = ({headerContent, pageContent}) => {
    return (
        <div className={'page-static page-wrapper'}>
            <Header headerContent={headerContent}/>
            <div className="page-static__content-wrapper content-wrapper">
                <div className="page-static__content page__content">
                    {pageContent}
                </div>
            </div>
            <Footer/>
        </div>);
};

export default StaticPage;