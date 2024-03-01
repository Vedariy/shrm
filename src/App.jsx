import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {CatalogPage} from './domains/catalog/CatalogPage';
import {Notfoundpage} from './pages/Notfoundpage';

import {Layout} from './components/Layout';
import {Catalog} from "./pages/Catalog";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


export const $API_BASE_URL = 'http://3.83.124.41:8000';
export const DEFAULT_PER_PAGE = 8

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path='catalog' element={<CatalogPage/>}/>
                            <Route path='terms' element={<TermsConditionsPage/>}/>
                            <Route path='privacy' element={<PrivacyPolicyPage/>}/>
                            <Route path='*' element={<Notfoundpage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
}

export default App;
