const helpersConfig = require("./config")

const cookieParser = require("cookie-parser")
const sanitize = require('sanitize')
const express = require("express")
const app = express()

const path = require('node:path')

const routes = require('./routes')

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

app.use('/api/v1', routes.mrvlRoutes)

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
