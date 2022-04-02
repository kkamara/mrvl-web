import React from 'react'

import ComicModal from './ComicModal'

const Comic = ({ 
  comic, 
  fetchFavItems, 
  unFavComicCallback, 
}) => (  
  <ComicModal 
    comic={comic} 
    fetchFavItems={fetchFavItems}
    unFavComicCallback={unFavComicCallback}
  />
)

export default Comic
