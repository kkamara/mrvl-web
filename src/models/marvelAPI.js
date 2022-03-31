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
    _comics_filters = {
        format: {
            description: 'Filter by the issue format (e.g. comic, digital comic, hardcover).',
            type: 'string',
            options: [
                'comic', 'magazine', 'trade paperback', 'hardcover', 
                'digest', 'graphic novel', 'digital comic', 'infinite comic',
            ],
        }, 
        formatType: {
            description: 'Filter by the issue format type (comic or collection).',
            type: 'string',
            options: ['comic', 'collection',],
        },
        noVariants: {
            description: `Exclude variants (alternate covers, secondary printings, director's cuts, etc.) from the result set.`,
            type: 'boolean',
        },
        dateDescriptor: {
            description: 'Return comics within a predefined date range.',
            type: 'string',
            options: [
                'lastWeek', 'thisWeek', 'nextWeek', 'thisMonth',
            ],
        },    
        dateRange: {
            description: 'Return comics within a predefined date range. Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02). Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.',
            type: 'number',
        },
        title: {
            description: 'Return only issues in series whose title matches the input.',
            type: 'string',
        },
        titleStartsWith: {
            description: '	Return only issues in series whose title starts with the input.',
            type: 'string',
        },
        startYear: {
            description: 'Return only issues in series whose start year matches the input.',
            type: 'number',
        },    
        issueNumber: {
            description: 'Return only issues in series whose issue number matches the input.',
            type: 'number',
        },
        diamondCode: {
            description: 'Filter by diamond code.',
            type: 'string',
        },
        digitalId: {
            description: 'Filter by digital comic id.',
            type: 'number',
        },
        upc: {
            description: 'Filter by UPC.',
            type: 'string',
        },    
        isbn: {
            description: 'Filter by ISBN.',
            type: 'string',
        },
        ean: {
            description: 'Filter by EAN.	',
            type: 'string',
        },
        issn: {
            description: 'Filter by ISSN.',
            type: 'string',
        },
        hasDigitalIssue: {
            description: 'Include only results which are available digitally.',
            type: 'boolean',
        },
        modifiedSince: {
            description: '	Return only comics which have been modified since the specified date.',
            type: 'date',
        },    
        creators: {
            description: '	Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).',
            type: 'number',
        },
        characters: {
            description: '	Return only comics which feature the specified characters (accepts a comma-separated list of ids).',
            type: 'number',
        },
        series: {
            description: 'Return only comics which are part of the specified series (accepts a comma-separated list of ids).',
            type: 'number',
        },
        events: {
            description: 'Return only comics which take place in the specified events (accepts a comma-separated list of ids).',
            type: 'number',
        },    
        stories: {
            description: '	Return only comics which contain the specified stories (accepts a comma-separated list of ids).',
            type: 'number',
        },
        sharedAppearances: {
            description: '	Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). Accepts a comma-separated list of ids.',
            type: 'number',
        },
        collaborators: {
            description: 'Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids.',
            type: 'number',
        },
        orderBy: {
            description: 'Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids.',
            type: 'string',
        },    
        limit: {
            description: 'Limit the result set to the specified number of resources.',
            type: 'number',
        },
        offset: {
            description: 'Skip the specified number of resources in the result set.',
            type: 'number',
        },    
    }

    /**
     * Call base class construct.
     * @param {any=} http - Optional http to override default assignment
     * @return void
     */
    constructor(http=null) {
        super(http)
    }

    /**
     * @param {string} key
     * @returns {bool}
     */
    acceptedKey(key, value) {
        if (Object.keys(this._comics_filters).includes(key)) {
            if (
                this._comics_filters[key].type === 'number' && 
                isNaN(parseInt(value))
            ) {
                return false
            }
            if (
                this._comics_filters.options &&
                !this._comics_filters.options.includes(value)
            ) {
                return false
            }
            return true
        }
        return false
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
    getComics(queryParams) {
        const endpoint = new URL(`${marvelURL}/public/comics`)
        let urlParams = this.generateKeys()
        if (
            queryParams !== null &&
            typeof queryParams === 'object' &&
            Object.keys(queryParams).length > 0
        ) {
            for (const key in queryParams) {
                const val = queryParams[key]
                if (!this.acceptedKey(key, val)) {
                    throw new Error(
                        `Query param (${key}, ${val} not accepted`
                    )
                }
                endpoint.searchParams.append(key, val)
            }
            urlParams = {...urlParams, ...queryParams,}
        }

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
