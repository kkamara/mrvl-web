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
        
        this.getComics()
            .then(res => {
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
                throw err
            })
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
                endpoint.searchParams.append(key, val)
            }
        }
        return axios.get(endpoint.href, { headers: this._headers,})
    }
}
