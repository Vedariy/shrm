import React from 'react';

const getPageNumbers = (currentPage, totalPages) => {

    const shownLimit=7;

    const range = [];

    if (totalPages===2) return [1,2]

    for (let i = 2; i <=totalPages-1 ; i++) {
        if(totalPages<=shownLimit)  range.push(`${i}`)
        else if (currentPage === i) range.push(`${i}`) //show current page
        else if (currentPage-1 <=i && i <= currentPage+1) range.push(`${i}`) //show aside  pages
        else if( i <5  && currentPage <5 )  range.push(`${i}`)//show first 5 pages if inside
        else if( totalPages-i < 4 && totalPages-currentPage < 4 ) range.push(`${i}`) //show last 4 pages if inside
        // else if( currentPage - i ===  4 )  range.push('---')
        // else if( i-currentPage ===4)  range.push('+++')
        else range.push('...')//show ellipsis instead of page numbers
    }

    const pages = range.length ? [1, ...range, totalPages] : [];

    //reduce from duplicated ellipses
    const res = pages.reduce((acc, curr, i) => {
        if(curr==='...' && acc.slice(-1)[0]==='...') return  [...acc];
        return [...acc, curr]
    },[])

    return res;
}
const Pagination = ({entriesPerPage, totalEntries, paginate, currentPage, from, to}) => {
    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    // Генерация порядковых номеров страниц
    console.log('getPageNumbers(currentPage, totalPages);', {currentPage, totalPages})
    const pageNumbers = getPageNumbers(currentPage, totalPages);
    // for (let i = 1; i <= totalPages; i++) {
    //     pageNumbers.push(i);
    //
    // }
    if (totalEntries === 0) {
        return <p>NO RECORDS FOUND</p>
    }
    const handlePageChange = (event) => {
        console.log(event);
        // TODO Only change displayed selected page
        // when its content is loaded in useEffect.
        paginate(event.selected);
    };
    if(pageNumbers.length <= 1) return null;
    return (
        <>
            <div className={'pagination'}>
                <div className='pagination__main'>
                    <div className={`pagination__main-nav_prev ${Number(currentPage) === 1 ? 'disabled' : ''}`}>
                        <button onClick={() => paginate(Number(currentPage) - 1)}
                                className='page-link' disabled={Number(currentPage) === 1}>
                            <span>{'<'}</span>
                        </button>
                    </div>
                    <div className="pagination__main-nav-pages">
                        {pageNumbers.map((number,i) => (
                            // <div key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button  key={`${number}_${i}`} onClick={() => {
                                String(number)!=='...' && paginate(Number(number))
                            }}
                                    className={`page-link ${String(currentPage) === String(number) ? 'active' : ''}`}>
                                <span>{number}</span>
                            </button>
                            // </div>
                        ))}

                    </div>
                    <div className={`pagination__main-nav_next  ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button onClick={() => paginate(Number(currentPage) + 1)} className='page-link'
                                disabled={Number(currentPage) === Number(totalPages)}>
                            <span>{'>'}</span>
                        </button>
                    </div>
                </div>
                <div className="pagination__info">
                    {totalEntries ? <p>Showing {from} to {to} of {totalEntries} entries</p> : <p>No records found</p>}
                    {/*<p>Showing {(currentPage-1) * entriesPerPage + 1 } to {(currentPage) * entriesPerPage  } of {totalEntries} entries</p>*/}
                </div>
            </div>
        </>
    );
};

export default Pagination;
