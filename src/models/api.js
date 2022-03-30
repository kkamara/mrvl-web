const axios = require('axios')

module.exports = class API {
    /** HTTP lib for network requests @prop http */
    _http = ''

    /**
     * Base class constructor
     * @param {any=} http - Optional http to override default assignment
     * @return {void}
     */
    constructor(http=null) {
        this._http = null !== http ? http : axios
    }
}
