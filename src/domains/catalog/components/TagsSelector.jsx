import React from 'react';
import Select from "react-select";
import {BROWN_COLOR, BROWN_LIGHT_COLOR, GREY_COLOR, WHITE_COLOR} from "../../../utils/consts";

export const isPriceTag = (tagTxt) => {
    return dollarPriceRegex.test(tagTxt)
}
const dollarPriceRegex = /\$\d+(\.\d{1,2})?/;

const TagsSelector = ({selectedTags, onTagsChange, options}) => {
    console.log('selectedTags', selectedTags)
    const handleTagClick = (tags) => {
        console.log({tags})
        onTagsChange(tags);
    }
    return (
        <div className="sidebar__tags">
            <p>Tags</p>
            <Select
                isMulti
                options={options}
                value={selectedTags}
                // menuIsOpen={true}
                onChange={handleTagClick}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? `${BROWN_COLOR}` : `${BROWN_LIGHT_COLOR}`,
                        borderRadius: '10px',
                        padding: '12px 15px 3px',
                        outlineColor: `${BROWN_LIGHT_COLOR}`,
                    }),
                    container: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: '10px',
                        outlineColor: `${BROWN_LIGHT_COLOR}`,

                    }),
                    valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        padding: 0,

                    }),
                    multiValueLabel: (baseStyles, state) => ({
                        ...baseStyles,
                        color: `${BROWN_COLOR}`,
                        paddingRight: '8px',
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: `${BROWN_COLOR}`,
                        border: `none`,
                        borderRadius: `50%`,
                        color: `${WHITE_COLOR}`,
                        padding: 0,
                        ':hover': {
                            color: `${BROWN_LIGHT_COLOR}`,
                        },
                    }),
                    indicatorSeparator: (baseStyles, state) => ({
                        ...baseStyles,
                        display: 'none',
                    }),
                    dropdownIndicator: (baseStyles, state) => ({
                        ...baseStyles,
                        display: 'none',
                    }),
                    clearIndicator: (baseStyles, state) => ({
                        ...baseStyles,
                        marginRight: '-1rem'
                    }),
                    placeholder: (baseStyles, state) => ({
                        ...baseStyles,
                        padding: '5px 0 10px',
                        color: `${GREY_COLOR}`,
                        fontSize: '14px',
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        marginTop: 0,
                        borderTop: `1px solid white`,
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        color: "#585858",
                        borderTop: "1px solid #E1DDD7",
                        backgroundColor:'white',
                        margin: "0 auto",
                        padding: "16px 20px",
                        position: "relative",
                        bottom: "0",
                        left: "auto",
                        textAlign: "left",
                        width: "94%",
                        transition: "ease-in-out 0.2s",
                        fontSize: "14px",
                        "&:first-child": {borderTop: "none"},
                        "&:hover": {
                            color: `${BROWN_LIGHT_COLOR}`,
                            backgroundColor: `${BROWN_COLOR}`,
                            borderRadius: "10px",
                        },
                        "&:hover+div": {
                            borderTopColor:"white"
                        }

                    }),
                    optionHover: (baseStyles, state) => ({
                        ...baseStyles,
                        color: `${BROWN_LIGHT_COLOR}`,
                        backgroundColor: `${BROWN_COLOR}`
                    }),
                    multiValue: (styles, {data}) => ({
                        ...styles,
                        backgroundColor: `${BROWN_LIGHT_COLOR}`,
                        height: '36px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        // backgroundColor: 'rgba(174, 152, 117, .1)',
                        whiteSpace: 'nowrap',
                        border: 'none',
                        maxHeight: '36px',
                        fontSize: '14px',
                        padding: '0 10px',
                        margin: '0px 10px 10px 0',
                        transition: 'ease-in-out .2s',

                    })
                }}
            />
            {/*{selectedTags.map((tag, index) => (*/}
            {/*    <span key={index} className="sidebar__tags-filter-list-selected"*/}
            {/*          onClick={() => handleTagClick(tag)}>{tag}*/}
            {/*        <button>X</button></span>*/}
            {/*))}*/}
            {/*{allTags.map((tag, index) => (*/}
            {/*    <span key={index} className={`sidebar__tags-filter-list-item ${isPriceTag(tag.label)?'pricetag' : ''}`} onClick={() => handleTagClick(tag.value)}><button>{tag.label}</button></span>*/}
            {/*))}*/}
        </div>
    );
};

export default TagsSelector;