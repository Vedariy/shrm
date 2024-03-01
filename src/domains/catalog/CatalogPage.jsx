import React, {useState, useEffect} from 'react';
import HeaderCatalog from './components/HeaderCatalog';
import FiltersSidebar from './components/FilterSidebar';
import AiCompanies from './components/AiCompanies';
import Pagination from './components/Pagination';
import Footer from '../../components/Layout/Footer';
import {useCatalogAPIData} from "../../infra/API";
import {useSearchParams} from "react-router-dom";
import {DEFAULT_PER_PAGE} from "../../App";

const CatalogPage = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const searchCategory = searchParams.get('category');


    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const perPage = DEFAULT_PER_PAGE;

    const filters = {
        category: selectedCategory,
        subCategory: selectedSubCategory,
        tags: selectedTags?.map(tag => tag.value).join(',')
    };
    console.log({filters});
    const {
        companiesQuery, setCatalogParams
    } = useCatalogAPIData();

    useEffect(() => {
        if (!searchCategory) return;
        setSelectedCategory(searchCategory);
        setCatalogParams({
            filters: {...filters, category: searchCategory},
            page: 1
        })
    }, [])
    const handleSearch = (searchStr) => {
        setSearchTerm(searchStr);
        setCatalogParams({
            search: searchStr,
            page: 1
        })
        setCurrentPage(1); // Сброс текущей страницы при поиске
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCatalogParams({
            filters: {...filters, category},
            page: 1
        })
        setCurrentPage(1); // Сброс текущей страницы при выборе категории
    };
    const handleSubCategoryChange = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setCatalogParams({
            filters: {...filters, subCategory},
            page: 1

        })

        setCurrentPage(1); // Сброс текущей страницы при выборе категории
    };

    const handleTagChange = (tags) => {
        console.log('handleTagChange', {selectedTags, tags})
        setSelectedTags(tags);
        setCatalogParams({
            filters: {...filters, tags: tags?.map(tag => tag.value).join(',')},
            page: 1

        })

        setCurrentPage(1); // Сброс текущей страницы при выборе тега
    };

    // Фильтрация новостей в соответствии с текущими настройками поиска, категории и выбранными тегами
    // const filteredNews = tempNewsData.filter(item => {
    //     if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    //         return false;
    //     }
    //     if (selectedCategory && item.tags.indexOf(selectedCategory) === -1) {
    //         return false;
    //     }
    //     if (selectedTags.length > 0 && !selectedTags.every(tag => item.tags.includes(tag))) {
    //         return false;
    //     }
    //     return true;
    // });

    // Пагинация

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        setCatalogParams({page: pageNumber})
    };
    const companies = companiesQuery?.data?.data ?? [];
    const {from, to, total, current_page, last_page} = companiesQuery?.data?.meta ?? {
        total: 0,
        current_page: 0,
        last_page: 0
    };
    console.log({companies, searchCategory})
    return (
        <div className={'catalog-page__wrapper page-wrapper'}>
            <HeaderCatalog/>
            <div className="catalog-page__content-wrapper content-wrapper">
                <FiltersSidebar
                    onSearch={handleSearch}
                    onCategoryChange={handleCategoryChange}
                    onSubCategoryChange={handleSubCategoryChange}
                    onTagsChange={handleTagChange}
                    selectedTags={selectedTags}
                    selectedCategory={selectedCategory}
                    selectedSubCategory={selectedSubCategory}
                />
                <div className="catalog-page__content page-content">
                    <div className="main-content">
                        <AiCompanies products={Array.isArray(companies) ? companies : []}/>
                        <Pagination
                            entriesPerPage={perPage}
                            totalEntries={total}
                            paginate={handlePaginate}
                            currentPage={currentPage}
                            from={from}
                            to={to}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export {CatalogPage};
