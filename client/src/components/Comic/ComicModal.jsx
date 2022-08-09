import React, { useState, } from 'react'
import { connect } from 'react-redux'
import { useLocation, } from 'react-router-dom'
import Modal from 'react-modal'
import { useFlags, } from 'flagsmith/react'
import { ENV, } from '../../constants'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { favComic, unFavComic, } from '../../redux/actions/comic'
import notFoundImage from '../../assets/not-found.jpg'
import modalBackground from '../../assets/modal-background.jpg'

import './ComicModal.scss'

Modal.setAppElement('#root')

function ComicModal({ 
  unFavComicCallback,
  fetchFavItems,
  favComics,
  unFavComic,
  favComic,
  history,
  comic,
}) {
  const flags = useFlags(['copy_link_feature'],)

  const [open, setOpen] = useState(false)
	
  const handleOpenModalOperation = () => {
    setOpen(true)
  }

  const handleCloseModalOperation = () => {
    setOpen(false)
  }

  const handleLinkClickOperation = () => {
    const domain = new URL(window.location.href)
    const url = domain.origin + '/comic/' + comic.id
    navigator.clipboard.writeText(url)
    const msg = url + ' has been successfully copied to clipboard.'
    console.log(msg)
    alert(msg)
  }

  const handleFavouriteComicClick = () => {
    favComic(comic.id)
  }

  const handleUnfavouriteComicClick = () => {
    unFavComic(comic.id)
    if (fetchFavItems) {
      handleCloseModalOperation()
      unFavComicCallback(fetchFavItems)
    }
  }

  function getModalStyles() {
    if (window.innerWidth < 650) {
      return styles.comicModalMobile
    }
    return styles.comicModal
  }

  function getInnerIconStyles() {
    let innerStyles = { 
      ...styles.icon, 
      right: 32,
      bottom: 645,
      position: 'absolute',
    }
    if (window.innerWidth < 650) {
      innerStyles = {
        ...innerStyles,
        ...styles.iconMobile,
    }
    }
    return innerStyles
  }

  const __renderImage = () => {
    let image = notFoundImage
    if (comic.images.length) {
      image = comic.images[0].path+'.'+comic.images[0].extension
    }
    return <CardMedia
      component='img'
      height='500'
      image={image}
      alt={comic.title}
      className='comic-image'
    />
  }
  
  function __renderFavouriteIcon() {
    if (!favComics.ids.includes(comic.id)) {
      return <FavoriteBorderIcon 
        onClick={handleFavouriteComicClick}
        style={getInnerIconStyles()}
        fontSize='large' 
        color='warning' 
      />
    }
    return <FavoriteIcon
      onClick={handleUnfavouriteComicClick}
      style={getInnerIconStyles()}
      fontSize='large' 
      color='warning' 
    />
  }
  
  return (
    <>
      <div className='comic-thumbnail-container' id={comic.id}>
        <img 
          onClick={handleOpenModalOperation}
          className='comic-thumbnail'
          src={comic.thumbnail.path+'.'+comic.thumbnail.extension} 
          alt={comic.title} 
        />
        <p onClick={handleOpenModalOperation}>{comic.title}</p>
      </div>
      <Modal
          isOpen={open}
          contentLabel='Comic Modal'
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={handleCloseModalOperation}
          style={getModalStyles()}
          onAfterOpen={() => console.log('opened comic', comic)}
        >
         <Card sx={{ maxWidth: 345 }}>
          {__renderImage()}
          {__renderFavouriteIcon()}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {comic.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <span dangerouslySetInnerHTML={ { __html: comic.description}} ></span>
            </Typography>
          </CardContent>
          <CardActions>
            <a onClick={handleCloseModalOperation} className='link-warning close-modal-btn'>Close</a>
            {flags.copy_link_feature.enabled && flags.copy_link_feature.value === ENV ?
              <a 
                onClick={handleLinkClickOperation} 
                className='link-primary close-modal-btn'
	        style={styles.copyLinkBtn}
              >
                Copy Link
              </a> :
            null}
          </CardActions>
        </Card>
      </Modal>
    </>
  )
}

const styles = {
  comicModal: { 
    content: { 
      width: 375, 
      height: 730, 
      left: '40%', 
      backgroundImage: `url(${modalBackground})`,
    },
  },
  comicModalMobile: {
    content: { 
      width: 320, 
      height: 700, 
      backgroundImage: `url(${modalBackground})`,
    },
  },
  iconMobile: {
    cursor: 'pointer',
    right: 32,
    bottom: 620,
    fontSize: 50,
    position: 'absolute',
  },
  icon: {
    cursor: 'pointer',
    right: 32,
    bottom: 645,
    fontSize: 50,
    position: 'absolute',
  },
  copyLinkBtn: {
    position: 'absolute',
    right: 27,
  },
}

const mapStateToProps = state => ({
  favComics: state.comic.favComics,
})
const mapDispatchToProps = dispatch => ({
  favComic: id => dispatch(favComic(id)),
  unFavComic: id => dispatch(unFavComic(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ComicModal)
