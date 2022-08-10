import React, { useEffect, useState, } from 'react'
import { connect } from 'react-redux'
import { Helmet, } from "react-helmet"

import { useQuery, } from '../../utilities/methods'
import { APP_NAME, } from "../../constants"
import Comic from '../Comic'
import SimplePagination from "../Pagination/SimplePagination"

import { getComicsFilters, } from "../../redux/actions/comicsFilters"
import { getSearchComics, } from "../../redux/actions/searchComics"
import Loader from "../Loader"

const isValidClass = 'is-valid'
const isInvalidClass = 'is-invalid'

const SearchComicsPage = ({
  getComicsFilters,
  getSearchComics,
  comicsFilters,
  searchComics,
}) => {
	const query = useQuery()
	let paginationOffset = 0

	let queryOffset = query.get('offset')
	if (queryOffset && !isNaN(parseInt(queryOffset))) {
    paginationOffset = parseInt(queryOffset)
	}

  const [format, setFormat] = useState('')
  const [formatType, setFormatType] = useState('')
  const [noVariants, setNoVariants] = useState('')
  const [dateDescriptor, setDateDescriptor] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [title, settitle] = useState('')
  const [titleStartsWith, setTitleStartsWith] = useState('')
  const [startYear, setStartYear] = useState('')
  const [diamondCode, setDiamondCode] = useState('')
  const [digitalID, setDigitalID] = useState('')
  const [upc, setUpc] = useState('')
  const [isbn, setIsbn] = useState('')
  const [ean, setEan] = useState('')
  const [issn, setIssn] = useState('')
  const [hasDigitalIssue, setHasDigitalIssue] = useState('')
  const [modifiedSince, setModifiedSince] = useState('')
  const [creators, setCreators] = useState('')
  const [characters, setCharacters] = useState('')
  const [series, setSeries] = useState('')
  const [events, setEvents] = useState('')
  const [stories, setStories] = useState('')
  const [sharedAppearances, setSharedAppearances] = useState('')
  const [collaborators, setCollaborators] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [limit, setLimit] = useState('')
  const [offset, setOffset] = useState('')

	useEffect(() => {
		loadComicsFilters(paginationOffset)
	}, [])

	const loadComicsFilters = (paginationOffset) => {
		getComicsFilters(paginationOffset)
	}

	const loadSearchComics = (filters, paginationOffset) => {
		getSearchComics(filters, paginationOffset)
	}

	const {
    data: comicsFiltersData,
    fetched: comicsFiltersFetched,
    loading: comicsFiltersLoading,
  } = comicsFilters
	const {
    data: searchComicsData,
    fetched: searchComicsFetched,
    loading: searchComicsLoading,
  } = searchComics
	const pageTitle = `Search Page | ${APP_NAME}`

	const __renderHeaderTags = () => {
    return <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="url" content={window.location.href} />
    </Helmet>
	}

	const __renderComics = () => {
		if (
			!searchComicsData ||
			!(
				(typeof searchComicsData === 'object' && searchComicsData !== null) &&
				searchComicsData.results !== undefined
			) ||
			!searchComicsData.results.length
		) {
			return <p>No results to display your query.</p>
		}
		
		return searchComicsData.results.map((comic, key) =>
			<Comic key={key} comic={comic}/>
		)
	}
  
  const handleSearchPageFormSubmit = () => {

  }

  console.log('comicsFilters', comicsFilters)
  console.log('searchComics', searchComics)

	if (!comicsFiltersData && !comicsFiltersFetched && !comicsFiltersLoading) {
    return <Loader />
  } else if (!searchComicsFetched && searchComicsLoading) {
		return <Loader />
	}

	let content = null

	if (!searchComicsData && !searchComicsFetched && !searchComicsLoading) {
    content = null
  } else if (searchComicsFetched && !searchComicsLoading) {
		content = (
			<div className="container text-center">
				<div className="content-header">
					<SimplePagination data={searchComicsData} />
				</div>
				{__renderComics()}
				<div className="content-footer">
					<SimplePagination data={searchComicsData} />
				</div>
			</div>
		)
	} else if (!searchComicsFetched && searchComicsLoading) {
		content = <Loader />
	} else {
		content = <div className="container">
			<div>Unknown error encountered</div>
		</div>
	}

  return <>
    {__renderHeaderTags()}
    <div className="container">
      <form
        className="card bg-dark"
        action=''
        method='GET'
        onSubmit={() => {}}
      >
        <div className="card-body bg-dark">
          <div className="card-text bg-dark">
            <div className="form-group">
              {/* comicsFiltersData */}
              <span className='btn btn-danger'>error has occurred.</span>
              <input
                onChange={(e) => { setFormat(e.target.value) }}
                name='format'
                type="text"
                className={`form-control ${isInvalidClass}`}
                placeholder='Format'
                value={format}
                style={styles.input}
              />
            </div>
            <div className="form-group">
              <select
                onChange={() => {}}
                name="status"
                className={`form-control ${isValidClass}`}
                // value={status}
                style={styles.input}
              >
                <option value="">Please choose a status</option>
                <option value="alive">Alive</option>
                <option value="dead" >Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div className="form-group">
              <input
                onChange={() => {}}
                name='species'
                type="text"
                className="form-control"
                placeholder='Species'
                // value={species}
                style={styles.input}
              />
            </div>
            <div className="form-group">
              <input
                onChange={() => {}}
                name='type'
                type="text"
                className="form-control"
                placeholder='Type'
                // value={type}
                style={styles.input}
              />
            </div>
            <div className="form-group">
              <select
                onChange={() => {}}
                name="gender"
                className="form-control"
                // value={gender}
                style={styles.input}
              >
                <option value="">Please choose a gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>

            <div className="form-group w-100" style={styles.submitBtnContainer}>
              <div
                className="btn btn-info btn-lg"
                style={styles.submitBtn}
                onClick={handleSearchPageFormSubmit}
              >
                Go
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    {content}
  </>
}

const styles = {
  input: {
    backgroundColor: '#212529',
    borderColor: '#212529',
    color: '#fff',
    marginBottom: 20,
  },
  submitBtnContainer: {
    textAlign: 'right',
  },
  submitBtn: {
    color: '#fff',
  },
}

const mapStateToProps = state => ({
	comicsFilters: state.comicsFilters,
	searchComics: state.searchComics,
})
const mapDispatchToProps = dispatch => ({
	getComicsFilters: (filters, offset) => dispatch(getComicsFilters(offset)),
	getSearchComics: (filters, offset) => dispatch(getSearchComics(filters, offset)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComicsPage)
