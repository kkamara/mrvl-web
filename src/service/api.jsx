import axios from 'axios'

export default class API {
    /** API endpoint base url @prop url */
    _url = ''

    /** HTTP lib for network requests @prop http */
    _http = ''

    /**
     * Base class constructor
     * @param {any=} http - Optional http to override default assignment
     * @return {void}
     */
    constructor(url=null, http=null) {
        this._http = null !== http ? http : axios
    }
}
