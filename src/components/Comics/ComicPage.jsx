import React, { useEffect, } from "react"
import { connect, } from "react-redux"
import { Helmet, } from "react-helmet"

import { getComic, } from "../../redux/actions/singleComic"
import { getFavComics, } from "../../redux/actions/comic"
import Comic from '../Comic'

import Loader from "../Loader"
import { APP_NAME, } from "../../constants"

const ComicPage = ({ 
	getFavComics,
	getComic, 
	singleComic: comic, 
}) => {
	const { comic: comicData, fetched, loading, } = comic
	let data = false;
	if (fetched && !loading && comicData !== false) {
		data = comicData.results[0];
	}
	let url = window.location.href.slice(0,
    window.location.href.lastIndexOf('/')
	)
	const id = url.slice(
		url.lastIndexOf('/') + 1
	)
	
	let pageTitle = ` | ${APP_NAME}`
	
	useEffect(() => {
		loadComic(id)
		loadFavComics()
	}, [])

	const loadComic = (id) => {
		getComic(id)
	}

	const loadFavComics = () => {
		getFavComics()
	}

	const __renderHeaderTags = () => {
		if (data === false) {
			return <Helmet>
				<title>{pageTitle}</title>
				<meta name="title" content={pageTitle} />
				<meta name="url" content={window.location.href} />
			</Helmet>
		}
		
		const img = data.images[0]

		return <Helmet>
			<title>{pageTitle}</title>
			<meta name="title" content={pageTitle} />
			<meta name="url" content={window.location.href} />
			<meta name="description" content={data.description}/>
			{img ?
				<meta name="image" content={img.path + img.extension} /> :
				null}
		</Helmet>
	}

	let content = null

	if (fetched && !loading && data !== false) {
		pageTitle = data.title + pageTitle
		content = (
			<div className="container text-center">
				<Comic 
					comic={data}
					disablePrevPaginator
					disableNextPaginator
				/>
			</div>
		)
	} else if (!fetched && loading) {
		content = <Loader />
	} else {
		content = <div className="container">
			<div>Unknown error encountered</div>
		</div>
	}

	return <>
		{__renderHeaderTags()}
		{content}
	</>
}

const mapStateToProps = state => ({
	singleComic: state.singleComic,
})
const mapDispatchToProps = dispatch => ({
	getFavComics: () => dispatch(getFavComics()),
	getComic: id => dispatch(getComic(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ComicPage)
