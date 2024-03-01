import React, {useState} from 'react';
import TagsSelector from "./TagsSelector";
import loopIcon from '../../../images/icons/loop.svg';
import SidebarSelector from "../../../components/Selector";
import {useCatalogAPIData} from "../../../infra/API";

const FilterSidebar = (
    {
        onSearch = () => ({}),
        selectedCategory,
        selectedSubCategory,
        selectedTags,
        onSubCategoryChange = () => ({}),
        onCategoryChange = () => ({}),
        onTagsChange = () => ({}),
    }) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const {
        subcategoriesQuery,
        categoriesQuery,
        tagsQuery,
    } = useCatalogAPIData();

    const {
        data: categoriesData,
        isLoading: categoriesIsLoading,
        isError: categoriesError
    } = categoriesQuery;

    const {
        data: subCategoriesData,
        isLoading: subCategoriesIsLoading,
        isError: subCategoriesError
    } = subcategoriesQuery;

    const {
        data: tagsData,
        isLoading: tagsIsLoading,
        isError: tagsError
    } = tagsQuery;

    const handleCategorySelect = (category) => {
        // setSelectedCategory(category);
        onCategoryChange(category);
        // setIsSelectOpen(false); // Закрываем селект после выбора категории
    };
    const handleSubCategorySelect = (subcategory) => {
        // setSelectedCategory(category);
        onSubCategoryChange(subcategory);
        // setIsSelectOpen(false); // Закрываем селект после выбора категории
    };
    const handleTagsSelect = (tags) => {
        // setSelectedCategory(category);
        console.log({tags});
        onTagsChange(tags);
        // setIsSelectOpen(false); // Закрываем селект после выбора категории
    };
    const allCategories = [{value: '', label: 'All'}].concat(categoriesData?.data?.map(category => ({
        value: category.id,
        label: category.name,
    })) || [])

    const allSubCategories = [{value: '', label: 'All'}].concat(subCategoriesData?.data?.map(category => ({
        value: category.id,
        label: category.name,
    })) || [])

    const allTags = tagsData?.data?.map(category => ({
        value: category.id,
        label: category.name,
    })) || []

    // const additionalCategories = ['Workspace Planning', 'Employee Engagement', 'Total Rewards', 'Performance Management', 'HR Operation'];
    return (
        <div className="sidebar">
            <div className="sidebar-search">
                <p>Find your product</p>
                <input type="text" placeholder="What do you want to find?" value={searchText}
                       onKeyUp={(e) => {
                           if (e.key === 'Enter') {
                               onSearch(searchText)
                           }
                       }}
                       onChange={(e) => setSearchText(e.target.value)}/>
                <img src={loopIcon} alt={'search'} className={'btn-search'} onClick={() => onSearch(searchText)}/>
            </div>
            <SidebarSelector
                title={'Category'}
                selectedOption={selectedCategory}
                onSelectChange={handleCategorySelect}
                options={allCategories}
            />
            <SidebarSelector
                title={'Subcategory'}
                selectedOption={selectedSubCategory}
                onSelectChange={handleSubCategorySelect}
                options={allSubCategories}
            />
            <TagsSelector
                selectedTags={selectedTags}
                onTagsChange={handleTagsSelect}
                options={allTags}
            />
        </div>
    );
};

export default FilterSidebar;
