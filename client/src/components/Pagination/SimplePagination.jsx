import React from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery, } from '../../utilities/methods'

const SimplePagination = ({ data }) => {
    const query = useQuery()
    let offset = 0

    let queryOffset = query.get('offset')
    if (queryOffset && !isNaN(parseInt(queryOffset))) {
        offset = parseInt(queryOffset)
    }

    let disableLeftPaginator = false,
        disableRightPaginator = false
    if (offset < 1) {
        disableLeftPaginator = true
    }
    if (offset > (data.total + offset)) {
        disableRightPaginator = true
    }

    let uriEncodedFilters = ''
    if (
        typeof data.filters !== 'undefined' &&
        typeof data.filters === 'string' &&
        data.filters.length
    ) uriEncodedFilters += `&${data.filters}`

    const leftPaginateBtnClick = e => {
        if (disableLeftPaginator) return
        window.location.href = `${window.location.origin}${window.location.pathname}?offset=${offset - 20}${uriEncodedFilters}`
    }

    const rightPaginateBtnClick = e => {
        if (disableRightPaginator) return
        window.location.href = `${window.location.origin}${window.location.pathname}?offset=${offset + 20}${uriEncodedFilters}`
    }
    
    return <>
        <nav aria-label='Comic pagination'>
            <ul className='pagination justify-content-center'>
                <li onClick={leftPaginateBtnClick} className={`page-item ${disableLeftPaginator ? 'disabled' : ''}`}>
                    <a className='page-link' href='#'>Previous</a>
                </li>
                <li onClick={rightPaginateBtnClick} className={`page-item ${disableRightPaginator ? 'disabled' : ''}`}>
                    <a className='page-link' href='#'>Next</a>
                </li>
            </ul>
        </nav>
    </>
}

export default withRouter(SimplePagination)
