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
     * Return characters api response   
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
}
