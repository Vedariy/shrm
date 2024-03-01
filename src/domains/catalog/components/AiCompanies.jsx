import React, {useState} from 'react';
import ServiceBlock from "./ServiceBlock";

const AiCompanies = ({products: services}) => {
    const [openedId, setOpenedId] = useState(null);
    // const {companiesQuery} = useCatalogAPIData();
    const toggleNews = (id) => {
        if (openedId === id) {
            setOpenedId(null);
        } else {
            setOpenedId(id);
        }
    };



    return (
        <>
            {services.map((item) => (
                <ServiceBlock key={item.id} item={item} openedId={openedId} toggleNews={toggleNews}/>
            ))}
        </>
    );
};

export default AiCompanies;
