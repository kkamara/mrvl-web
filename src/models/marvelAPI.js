const axios = require('axios')
const md5 = require('md5')
const API = require('./api')
const { 
    publicMarvelKey,
    privateMarvelKey,
    marvelURL,
} = require('../config')

class MarvelAPI extends API {
    _headers = { Accept: 'application/json', }

    /**
     * Call base class construct.
     * @param {any=} http - Optional http to override default assignment
     * @return void
     */
    constructor(http=null) {
        super(http)
    }

    /**
     * @return {string[]}
     */
    generateKeys() {
        const results = { apiKey: publicMarvelKey, ts: (new Date()).getTime(), }
        results.hash = md5(results.ts+privateMarvelKey+publicMarvelKey)
        return results
    }

    /**
     * Return a single character api response
     * @return {Promise}
     */
    getComics() {
        const endpoint = new URL(`${marvelURL}/public/comics`)
        const urlParams = this.generateKeys()

        for (let key in urlParams) {
            const val = urlParams[key]
            switch(key) {
                case 'apiKey':
                    key = 'apikey'
                default:
                    break
            }
            endpoint.searchParams.append(key, val)
        }
        return axios.get(endpoint.href, { headers: this._headers, })
    }

    /**
     * Get URI encoded string from given array
     * @param  {array} fields - Array containing field values
     * @return string
     */
    uriEncodeArray(fields) {
        /**
         * Default return value
         * @var {string} result
         */
        let result = ''
        /**
         * Maintain iteration count for given array
         * @var {int} count
         */
        let count = 0
        for (const name in fields) {
            const value = fields[name]
            if(null === value) continue
            result += count === 0
                ? `${name}=${value}`
                : `&${name}=${value}`
            ++count
        }

        return result
    }

    /**
     * Validate search input fields.
     * @param  object - input values for querying R&M characters
     * @return array|false
     */
    validateSearchParams({ name, status, species, type, gender }) {
        const result = []

        if (name && 255 <= name.length) {
            result["name"] = "The name exceeds 255 character limit."
        }

        /** @var {array} statuses */
        const statuses = ['alive', 'dead', 'unknown']
        if (status) {
            if (255 <= status.length) {
                result["status"] = "The status exceeds 255 character limit."
            } else if (!status.includes(statuses)) {
                result["status"] = `The status must be one of ${statuses.join(', ')}.`
            }
        }

        if (species && 255 <= species.length) {
            result["species"] = "The species exceeds 255 character limit."
        }

        if (type && 255 <= type.length) {
            result["type"] = "The type exceeds 255 character limit."
        }

        /** @var {array} genderOptions */
        const genderOptions = ['female', 'male', 'genderless', 'unknown']
        if (gender) {
            if (255 <= gender.length) {
                result["gender"] = "The gender exceeds 255 character limit."
            } else if (!gender.includes(genderOptions)) {
                result["gender"] = `The gender must be one of ${genderOptions.join(', ')}.`
            }
        }

        return result.length ? result : false
    }
}

module.exports = MarvelAPI
