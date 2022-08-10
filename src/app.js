const helpersConfig = require("./config")

const cookieParser = require("cookie-parser")
const sanitize = require('sanitize')
const express = require("express")
const app = express()

const marvelAPI = require('./models/marvelAPI')

const path = require('node:path')

/** serving react with static path */
const buildPath = path.join(
    __dirname,
    '../',
    'client',
    'build',
)
app.use(express.static(buildPath))

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(sanitize.middleware)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", helpersConfig.appURL)
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next()
})

const router = express.Router()

router.get('/comics', async (req, res) => {
    await (new marvelAPI()).getComics(req.query)
        .then(payload => {
            res.statusCode = 200
            res.send(JSON.stringify({ data: payload.data.data }))
        })
        .catch(err => {
            console.log(err)
            res.send(JSON.stringify(false))
        })
})

function isValidType(subject, typeToMatch) {
    let result = false

    if (undefined === subject) {
        return result
    }

    switch(typeToMatch) {
        case 'string':
            if (subject.match(/\w+/g)) {
                result = true
            }
            break
        case 'boolean':
            if (subject === 'false' | subject === 'true') {
                result = true
            }
            break
        case 'number':
            if (!isNaN(Number.parseInt(subject))) {
                result = true
            }
            break
        case 'date':
            if (subject.match(/\d{4}-\d{2}-\d{2}/g)) {
                result = true
            }
            break
    }
    return result
}

router.get('/comics/filters', async (req, res) => {
    return res.send(JSON.stringify({data: (new marvelAPI()).comics_filters}))
})

router.get('/comics/search', async (req, res) => {
    const api = new marvelAPI()
    const filterOptions = Object.assign({}, api.comic_filters)
    const filters = {}
    const errors = {}
    for (const fOption in filterOptions) {
        if (!isValidType(req.query[fOption], filterOptions[fOption]['type'])) {
            errors[fOption] = 'Type must match '+filterOptions[fOption]['type']
            continue
        }
        if (
            filterOptions[fOption]['options'] &&
            !filterOptions[fOption]['options'].includes(req.query[fOption])
        ) {
            errors[fOption] = 'Value must be one of '+filterOptions[fOption]['options'].join(', ')
            continue
        }
        filters[fOption] = req.query[fOption]
    }
    if (Object.keys(errors).length) {
        res.statusCode = 400
        return res.send(JSON.stringify({
            'error': 'Unsuccessful',
            'message': errors,
        }))
    }
    await api.getComics(req.query)
        .then((payload) => {
            res.statusCode = 200
            res.send(JSON.stringify({ data: payload.data.data }))
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send(JSON.stringify({
                'error': 'Unsuccessful',
                'message': err.message,
            }))
        })
})

router.get('/comics/:id', async (req, res) => {
    await (new marvelAPI()).getComic(req.params.id)
        .then(payload => {
            res.statusCode = 200
            res.send(JSON.stringify({ data: payload.data.data.results[0], }))
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.send(JSON.stringify({
                'error': 'Unsuccessful',
                'message': err.message,
            }))
        })
})

app.use('/api/v1', router)

/** Serving react with static path */
const reactRoutesPath = path.join(
    buildPath,
    'index.html'
)
app.use('*', express.static(reactRoutesPath))

if (helpersConfig.nodeEnv === "production") {
    app.listen(helpersConfig.appPort)
} else {
    app.listen(helpersConfig.appPort, () => {
        const url = `http://127.0.0.1:${helpersConfig.appPort}`
        console.log(`Listening on ${url}`)
    })
}
