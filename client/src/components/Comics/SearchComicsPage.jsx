import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import { Helmet, } from "react-helmet"

import { useQuery, } from '../../utilities/methods'
import { APP_NAME, } from "../../constants"

import { getComicsFilters, } from "../../redux/actions/comicsFilters"
import { getSearchComics, } from "../../redux/actions/searchComics"

const SearchComicsPage = ({
  getComicsFilters,
  getSearchComics,
  comicsFilters,
  searchComics,
}) => {
	const query = useQuery()
	let offset = 0

	let queryOffset = query.get('offset')
	if (queryOffset && !isNaN(parseInt(queryOffset))) {
			offset = parseInt(queryOffset)
	}

	useEffect(() => {
		loadComicsFilters(offset)
	}, [])

	const loadComicsFilters = (offset) => {
		getComicsFilters(offset)
	}

	const loadSearchComics = (filters, offset) => {
		getSearchComics(filters, offset)
	}

	// const {
  //   data: comicsFiltersData,
  //   fetched: comicsFiltersFetched,
  //   loading: comicsFiltersLoading,
  // } = comicsFilters
	// const {
  //   data: searchComicsData,
  //   fetched: searchComicsFetched,
  //   loading: searchComicsLoading,
  // } = searchComics
	const pageTitle = `Home | ${APP_NAME}`

  console.log('comicsFilters', comicsFilters)

  return (
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
              <input
                onChange={() => {}}
                name='name'
                type="text"
                className="form-control"
                placeholder='Name'
                // value={name}
                style={styles.input}
              />
            </div>
            <div className="form-group">
              <select
                onChange={() => {}}
                name="status"
                className="form-control"
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
              >
                Go
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
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
