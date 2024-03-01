import React from 'react';

const SidebarSelector = ({title, options, selectedOption = null, onSelectChange}) => {
    const [isSelectOpen, setIsSelectOpen] = React.useState(false);
    // const [selectedOption, setSelectedOption] = React.useState(null);
    const disabled = options.length === 0;
    const handleSelectChange = (value) => {
        onSelectChange(value)
        setIsSelectOpen(false)
    }
    return (
        <div className={`sidebar-select ${disabled ? 'disabled' : ''}`}>
            <p>{title}</p>
            <div className={`sidebar-select-wrap ${isSelectOpen ? 'open' : ''}`}>
                <div className="sidebar-select-header"
                     onClick={() => disabled ? void (0) : setIsSelectOpen(!isSelectOpen)}>
                    {options.find(opt => String(opt.value) === String(selectedOption))?.label || `Select ${title}`}
                    <span className={isSelectOpen ? 'arrow-up' : 'arrow-down'}></span>
                </div>
                {isSelectOpen && (
                    <ul className="sidebar-select-list">
                        {options?.map((option, index) => (
                            <li key={index} onClick={() => handleSelectChange(option.value)}>
                                {option?.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SidebarSelector;