import React from 'react'

import ComicModal from './ComicModal'

const Comic = ({ 
  comic, 
  fetchFavItems, 
  unFavComicCallback, 
  disablePrevPaginator,
  disableNextPaginator,
  openDefaultValue,
  openNextComic,
  openPrevComic,
}) => (  
  <ComicModal 
    comic={comic} 
    fetchFavItems={fetchFavItems}
    unFavComicCallback={unFavComicCallback}
    disablePrevPaginator={disablePrevPaginator}
    disableNextPaginator={disableNextPaginator}
    openDefaultValue={openDefaultValue}
    openNextComic={openNextComic}
    openPrevComic={openPrevComic}
  />
)

export default Comic
