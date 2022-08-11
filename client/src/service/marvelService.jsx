import axios from 'axios'
import { API_URL, } from '../constants'

export default class MarvelService{
    _headers = { Accept: 'application/json', }

    /**
     * Call base class construct.
     * @param {any=} http - Optional http to override default assignment
     * @return {void}
     */
    constructor(http=null) {
        this._url = API_URL
    }

    /**
     * Return comics api response   
     * @param {obj} queryParams
     * @returns {Promise}
     */
    getComics(queryParams) {
        /** @var {string} endpoint */
        const endpoint = new URL(`${this._url}/comics`)
        if (
            queryParams !== null &&
            typeof queryParams === 'object' &&
            Object.keys(queryParams).length
        ) {
            for(const key in queryParams) {
                const val = queryParams[key]
                if (val === null) {
                    continue
                }
                endpoint.searchParams.append(key, val)
            }
        }
        return axios.get(endpoint.href, { headers: this._headers,})
    }

    /**
     * Return comic api response   
     * @param {string} id
     * @returns {Promise}
     */
    getComic(id) {
        /** @var {string} endpoint */
        const endpoint = new URL(`${this._url}/comics/${id}`)
        return axios.get(endpoint.href, { headers: this._headers,})
    }

    /**
     * Return comics filters api response
     * @param {obj} queryParams
     * @returns {Promise}
     */
    getComicsFilters(queryParams) {
        /** @var {string} endpoint */
        const endpoint = new URL(`${this._url}/comics/filters`)
        if (
            queryParams !== null &&
            typeof queryParams === 'object' &&
            Object.keys(queryParams).length
        ) {
            for(const key in queryParams) {
                const val = queryParams[key]
                if (val === null) {
                    continue
                }
                endpoint.searchParams.append(key, val)
            }
        }
        return axios.get(endpoint.href, { headers: this._headers,})
    }

    /**
     * Return search comics api response
     * @param {obj} queryParams
     * @returns {Promise}
     */
    getSearchComics(queryParams) {
        /** @var {string} endpoint */
        const endpoint = new URL(`${this._url}/comics/search`)
        if (
            queryParams !== null &&
            typeof queryParams === 'object' &&
            Object.keys(queryParams).length
        ) {
            for(const key in queryParams) {
                const val = queryParams[key]
                if (val === null || (typeof val === 'string' && !val.length) || val === 0) {
                    continue
                }
                endpoint.searchParams.append(key, val)
            }
        }
        return axios.get(endpoint.href, { headers: this._headers,})
    }
}
