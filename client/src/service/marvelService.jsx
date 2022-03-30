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
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    /**
     * Return characters api response   
     * @return {Promise}
     */
    getComics() {
        /** @var {string} endpoint */
        let endpoint = new URL(`${this._url}/comics`)

        return axios.get(endpoint.href, { headers: this._headers,})
    }
}
