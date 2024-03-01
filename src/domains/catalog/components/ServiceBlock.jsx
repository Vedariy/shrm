import React from 'react';
import {isPriceTag} from "./TagsSelector";

const ServiceBlock = ({item, openedId, toggleNews}) => {
    const hasLearnMore = item.learn_more?.images?.length ||item.images.length || item.expandedTitle || item.expandedDescription || item.learn_more?.title || item.learn_more?.info
    return (
        <div className="main-content__block" key={item.id}>
            <div className="main-content__block-info">
                <div className="main-content__block-info-logo" onClick={() => toggleNews(item.id)}>
                    {item.logo ?
                        <img className={'logo'} src={`${item.logo}`} alt={item.title}/> : null}
                </div>
                <div className="main-content__block-info-content">
                    <h2>
                        {item.name}
                    </h2>
                    <p>{item.description ?? ''}</p>
                </div>
                <div className="main-content__block-info-buttons">
                    {item.web_site ?
                        <a className="btn-brown" href={item.web_site} target={'_blank'}>View Website</a> : ''}
                </div>
            </div>

            <div className="main-content__block-info">
                <div className="main-content__block-info-content-tags">
                    {item.tags.map((tag, index) => (
                        <span key={index}
                              className={`tag ${isPriceTag(tag.name) ? 'pricetag' : ''}`}>{tag.name}</span>
                    ))}
                </div>
                {
                    hasLearnMore && (
                        <div className="main-content__block-info-buttons expand">
                            <span onClick={() => toggleNews(item.id)}
                                  className={`btn-learn-more ${openedId === item.id ? 'open' : ''}`}>
                                {openedId === item.id ? 'Less' : 'Learn More'}
                            </span>
                        </div>
                    )
                }
            </div>

            {openedId === item.id && (
                <div className="main-content__block-info-expanded">
                    <div className={'description'}>
                        <h4>{item.expandedTitle??item.expanded_description}</h4>
                        <p>{item.expandedDescription??item.expanded_description}</p>
                        <div className="images">
                            {item?.images?.filter(image => typeof image === 'string').map((image, index) => (
                                <img key={index} src={image} alt={`${item.name}`}/>
                            ))}
                            {item?.learn_more?.images.filter(image => typeof image === 'string')?.map((image, index) => (
                                <img key={index} src={image} alt={`${item.name}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceBlock;