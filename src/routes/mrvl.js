const express = require("express")
const mrvlRoutes = express.Router()

const marvelAPI = require('../models/marvelAPI')

mrvlRoutes.get('/comics', async (req, res) => {
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

mrvlRoutes.get('/comics/favs', async (req, res) => {
    let comics = req.query['comics']
    if (!comics) {
        return res.send(JSON.stringify({data: []}))
    }
    comics = comics.split(',')
    for (const id of comics) {
        if (isNaN(Number.parseInt(id.trim()))) {
            res.statusCode = 400
            return res.send('Comics query param must be a comma-delimited string of comic ids')
        }
    }
    for (const key in comics) {
        comics[key] = comics[key].trim()
    }
    return res.send(JSON.stringify({data: await (new marvelAPI()).getFavComics(comics)}))
})

mrvlRoutes.get('/comics/filters', async (req, res) => {
    return res.send(JSON.stringify({data: (new marvelAPI()).comics_filters}))
})

mrvlRoutes.get('/comics/search', async (req, res) => {
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

mrvlRoutes.get('/comics/:id', async (req, res) => {
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

module.exports = mrvlRoutes
