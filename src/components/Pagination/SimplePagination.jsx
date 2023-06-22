import React from 'react'
import { useNavigate, createSearchParams, } from 'react-router-dom'

const SimplePagination = ({ data, searchParams, }) => {
    const navigate = useNavigate()
    
    let disableLeftPaginator = false,
        disableRightPaginator = false
    
    if (
        !isNaN(parseInt(searchParams.offset)) && 
        parseInt(searchParams.offset) < 1
    ) {
        disableLeftPaginator = true
    }
    if (data.count < data.limit) {
        disableRightPaginator = true
    }

    const leftPaginateBtnClick = e => {
        if (disableLeftPaginator) return
        navigate({ search: `?${createSearchParams({
            ...searchParams,
            ...{ offset: parseInt(searchParams.offset) - 20, },
        }).toString()}`, })
    }

    const rightPaginateBtnClick = e => {
        if (disableRightPaginator) return
        navigate({ search: `?${createSearchParams({
            ...searchParams,
            ...{ offset: parseInt(searchParams.offset) + 20, },
        }).toString()}`, })
    }
    
    return <>
        <nav aria-label='Comic pagination'>
            <ul className='pagination justify-content-center'>
                <li onClick={leftPaginateBtnClick} className={`page-item ${disableLeftPaginator ? 'disabled' : ''}`}>
                    <a className='page-link'>Previous</a>
                </li>
                <li onClick={rightPaginateBtnClick} className={`page-item ${disableRightPaginator ? 'disabled' : ''}`}>
                    <a className='page-link'>Next</a>
                </li>
            </ul>
        </nav>
    </>
}

export default SimplePagination
