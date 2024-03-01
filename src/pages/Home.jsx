import React, {useState} from 'react';
import logo from '../images/icons/logo.svg';
import Footer from '../components/Layout/Footer';
import HomeSection from "./HomeSection";

const sectionsData = [
    {
        id: 1, content:
            <div className='section-content'>
                <h1>Find the best <span className={'highlighted'}>AI</span> Tools for your workplace</h1>
                <p>Turn to SHRM for all things AI in the workplace.</p>
            </div>
    },
    {
        id: 2, content: <div className='section-content'>
            <p><span className={'highlighted'}>Tools for the next-generation of work.</span></p>
            <h2>Explore AI solutions built for work, workers, and the workplace.</h2>
            <div className='brand-logos'>
                <img src='/images/home/brands/Google%20Logo.svg' alt='shrm logo'/>
                <img src='/images/home/brands/Microsoft%20Logo.svg' alt='shrm logo'/>
                <img src='/images/home/brands/OYO%20Logo.svg' alt='shrm logo'/>
                <img src='/images/home/brands/Amazon%20Logo.svg' alt='shrm logo'/>
                <img src='/images/home/brands/OLA%20Logo.svg' alt='shrm logo'/>
            </div>
        </div>
    },
    {
        id: 3, content: <div className='section-content'>
            <div className='highlights'>
                <img onClick={()=> {
                    window.location = '/catalog?category=1'
                }} src='/images/home/features/workforce-planning.svg' alt='workforce planning'/>
                <img onClick={()=> {
                    window.location = '/catalog?category=2'
                }} src='/images/home/features/employee-engagement.svg' alt='employee engagement'/>
                <img onClick={()=> {
                    window.location = '/catalog?category=3'
                }} src='/images/home/features/total-rewards.svg' alt='total rewards'/>
            </div>
        </div>
    },
    {
        id: 4, content: <div className='section-content'>
            <div className='highlights'>
                <img onClick={()=> {
                    window.location = '/catalog?category=4'
                }}  src='/images/home/features/performance-management.svg' alt='performance management'/>
                <img onClick={()=> {
                    window.location = '/catalog?category=5'
                }}  src='/images/home/features/hr-operations.png' alt='HR operations'/>
            </div>
        </div>
    },
    {
        id: 5, content: <div className='section-content'>
            <div>
                <p>Generative AI has the potential to change the way we work. And AI + human intelligence will drive
                    progress and growth. Turn to SHRM for AI tools you can trust.</p>
                <div>
                    <button className='btn-big btn-brown' onClick={()=>{window.location ='/catalog'}} >Explore all tools</button>
                </div>
            </div>
        </div>
    },
    {
        id: 6, content:
            <div className='section-content'>
                <div className={`highlights block-wide`}>
                    <h2>Bringing AI to life in the workplace will cause disruption.</h2>
                    <p>That’s why SHRM is working together with business leaders and decision makers to understand a
                        human-centered approach to workplace AI adoption to maximize investment, foster innovation and
                        transform the workforce.</p>
                    <button className={`btn btn-white`} onClick={()=> {
                        window.open(' https://www.shrm.org/membership')
                    }}>Join SHRM</button>
                </div>
            </div>
    }
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);

    // useEffect(() => {
    //   const handleScroll = (event) => {
    //     const deltaY = event.deltaY;
    //     if ((deltaY > 0 && currentSection < sectionsData.length - 1) || (deltaY < 0 && currentSection > 0)) {
    //       setCurrentSection(currentSection + (deltaY > 0 ? 1 : -1));
    //     }
    //   };
    //
    //   window.addEventListener('wheel', handleScroll);
    //   return () => window.removeEventListener('wheel', handleScroll);
    // }, [currentSection]);

    const scrollToSection = (sectionIndex) => {
        const section = document.getElementById(`section-${sectionIndex + 1}`);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="home page-wrapper">
            <video id="background-video" width={'100%'} playsInline autoPlay muted loop controls>
                <source src="/video/CircleParticlesTemplate.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <header className="home-header">
                <img src={logo} alt="shrm logo"/>
                <button className="btn-brown" onClick={
                    () =>  window.open(' https://www.shrm.org/membership')
                }>Join SHRM
                </button>
            </header>
            <div className="home-content content-wrapper">
                <div className="sections">
                    {sectionsData.map((section, index) => (
                      <HomeSection section={section} key={section.id} isActive={section.id === currentSection } onClick={(idx)=>scrollToSection(idx)}/>
                    ))}
                    <Footer/>


                </div>
            </div>
        </div>
    );
};

export {Home};