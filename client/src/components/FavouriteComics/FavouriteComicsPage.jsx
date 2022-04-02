import React, { useEffect, } from "react"
import { connect, } from "react-redux"
import { Helmet, } from "react-helmet"

import { getFavComics, } from "../../redux/actions/comic"
import Comic from '../Comic'

import Loader from "../Loader"
import { APP_NAME, } from "../../constants"

const FavouriteComicsPage = ({ getFavComics, comic, }) => {
	const { favComics, fetched, loading, } = comic
	const pageTitle = `Favourite Comics | ${APP_NAME}`

	useEffect(() => {
		loadFavComics(true)
	}, [])

	const loadFavComics = (fetchFavItems) => {
		getFavComics(fetchFavItems)
	}

	const __renderHeaderTags = () => {
		return <Helmet>
			<title>{pageTitle}</title>
		</Helmet>
	}
	
	const __renderFavComics = () => {
		if (!favComics.ids.length) {
			return <p>No results to display your query.</p>
		}
		
		return favComics.items.map((favComic, key) =>
			<Comic 
				key={key} 
				comic={favComic} 
				fetchFavItems={true} 
				unFavComicCallback={loadFavComics} 
			/>
		)
	}
	
	let content = null
	
	if (fetched && !loading) {
		content = (
			<div className="container text-center">
				{__renderFavComics()}
			</div>
		)
	} else if (!fetched && loading) {
		content = <Loader />
	} else {
		content = <div>Unknown error encountered</div>
	}

	return <>
		{__renderHeaderTags()}
		{content}
	</>
}

const mapStateToProps = state => ({
  comic: state.comic,
})
const mapDispatchToProps = dispatch => ({
	getFavComics: (fetchFavItems) => dispatch(getFavComics(fetchFavItems)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteComicsPage)
