import React from 'react';

const HomeSection = ({section, isActive, onClick}) => {
    return (
        <div
            key={section.id}
            id={`section-${section.id}`}
            className={`section ${isActive? 'active' : ''}`}
            onClick={() => onClick(section.id)}
        >
            {section.content}
        </div>
    );
};

export default HomeSection;