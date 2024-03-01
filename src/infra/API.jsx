import  {useState} from 'react';
import {useQuery, keepPreviousData} from "@tanstack/react-query";
import {$API_BASE_URL, DEFAULT_PER_PAGE} from "../App";

// GET params for pagination
// page=page number from 1 to N
// per_page=Entries per page
// example:
// http://localhost:8083/api/v1/catalog/categories?page=2
//
// each response uses the following format:
// data, links и meta
// data - payload
// links и meta - metadata of the response

// const $API_BASE_URL = 'http://localhost:8000';
const CATEGORY_URL = '/api/v1/catalog/categories';
const SUBCATEGORY_URL = '/api/v1/catalog/subcategories';
const TAGS_URL = '/api/v1/catalog/tags';
const TARGET_MARKETS_URL = '/api/v1/catalog/target-markets';
const COMPANIES_URL = '/api/v1/catalog/companies';

const makeAPiUrl = (url) => `${$API_BASE_URL}${url}`;
const fetchCategories = async () => {
    return fetch(makeAPiUrl(CATEGORY_URL))
        .then((res) => res.json());
}
const fetchSubCategories = async () => {
    return fetch(makeAPiUrl(SUBCATEGORY_URL))
        .then((res) => res.json());
}
const fetchTags = async () => {
    return fetch(makeAPiUrl(TAGS_URL))
        .then((res) => res.json());
}
const fetchMarketTargets = async () => {
    return fetch(makeAPiUrl(TARGET_MARKETS_URL))
        .then((res) => res.json());
}
const fetchCompanies = async ({queryKey}) => {
    console.log('fetchCompanies',{queryKey})

    const [companies, page, per_page, filters, search=''] = queryKey;

    const companiesUrl = `${makeAPiUrl(COMPANIES_URL)}?page=${page}&per_page=${per_page}&${filters}&search=${search}`;
    console.log({companiesUrl})
    return fetch(companiesUrl)
        .then((res) => res.json());
}


export const useCatalogAPIData = () => {
    const [{page, per_page, search, filters}, setCatalogRequest] = useState({page: 1, per_page:DEFAULT_PER_PAGE , search:'',filters: {}});
    const filtersString = Object.keys(filters).map((filterCode) => (`filter[${filterCode}]=${filters[filterCode]}`)).join('&');

    const categoriesQuery = useQuery(
        {
            queryKey: ['categories'],
            queryFn: fetchCategories
        });
    const tagsQuery = useQuery(
        {
            queryKey: ['tags'],
            queryFn: fetchTags
        });
    const marketTargetsQuery = useQuery(
        {
            queryKey: ['marketTargets'],
            queryFn: fetchMarketTargets
        });

    const subcategoriesQuery = useQuery(
        {
            queryKey: ['subcategories'],
            queryFn: fetchSubCategories
        });

    const companiesQuery = useQuery(
        {
            queryKey: ['companies',  page, per_page, filtersString, search],
            queryFn: fetchCompanies,
            config: {
                placeholderData: keepPreviousData
            }
        });

    const setCatalogParams = (params) => {
        setCatalogRequest({
            page,
            per_page,
            filters,
            search,
            ...params
        });
        // companiesQuery.refetch();
    }
    return {
        categoriesQuery,
        marketTargetsQuery,
        subcategoriesQuery,
        tagsQuery,
        companiesQuery,
        setCatalogParams
    };
}
