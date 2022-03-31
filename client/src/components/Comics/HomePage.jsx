import React, { useEffect, } from "react"
import { connect, } from "react-redux"
import { Helmet, } from "react-helmet"

import { getComics, } from "../../redux/actions/comics"
import SimplePagination from "../Pagination/SimplePagination"
import Comic from '../Comic'

import { useQuery, } from '../../utilities/methods'
import Loader from "../Loader"
import { APP_NAME, } from "../../constants"

import './HomePage.scss'

import marvelService from '../../service/marvelService'

const HomePage = ({}) => {
	const pageTitle = `Home | ${APP_NAME}`

	let page = (useQuery()).get('page') 
	if (Number.parseInt(page)) {
		page = 1
	}
	useEffect(() => {
		// this.loadCharacters(page)
		console.log(new marvelService())
	}, [])

	const loadCharacters = (page) => {
			getComics(page)
	}

	const __renderHeaderTags = () => {
		return <Helmet>
			<title>{pageTitle}</title>
		</Helmet>
	}

	const __renderComics = () => {
		const { data } = this.props.comics

		if (
			!data ||
			!(
				(typeof data === 'object' && data !== null) &&
				data.results !== undefined
			) ||
			!data.results.length
		) {
			return <p>No results to display your query.</p>
		}

		return data.results.map((comic, key) =>
			<Comic key={key} comic={comic}/>
		)
	}

	const { data, fetched, loading } = { fetched: false, loading: false, }
	let content = null

	if (fetched && loading) {
		content = (
			<div className="container">
				<div className="col-md-4 offset-md-4">
					<div className="card">
						<div className="card-body">
							<div className="card-text">
								{/* {this.__renderComics()} */}
							</div>
						</div>
						<div className="card-footer">
							<SimplePagination data={data} />
						</div>
					</div>
				</div>
			</div>
		)
			} else if (!fetched && loading) {
				content = <div>Unknown error encountered</div>
		} else {
			content = <Loader />
	}

	return <>
		{__renderHeaderTags()}
		{content}
	</>
}

const mapStateToProps = state => ({
    comics: state.comics
})
const mapDispatchToProps = dispatch => ({
    getComics: page => dispatch(getComics(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
