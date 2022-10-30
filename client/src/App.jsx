import { BrowserRouter, Switch, Redirect, Route, } from 'react-router-dom'
import React, { Fragment, lazy, Suspense, } from 'react'

import $ from'jquery'
import Popper from'popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import Header from './components/Header'
import Loader from "./components/Loader"

const FavouriteComicsPage = lazy(() => import('./components/FavouriteComics/FavouriteComicsPage'))
const HomePage = lazy(() => import('./components/Comics/HomePage'))
const ComicPage = lazy(() => import('./components/Comics/ComicPage'))
const SearchComicsPage = lazy(() => import('./components/Comics/SearchComicsPage'))
const Page404 = lazy(() => import('./components/Page404'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => (
    <div id='app'>
        <BrowserRouter>
          <Suspense fallback={Loader}>
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/comic/:comic' exact component={ComicPage} />
                    <Route path='/search' exact component={SearchComicsPage} />
                    <Route path='/favs' exact component={FavouriteComicsPage} />
                    <Route path='/404' exact component={Page404} />
                    <Redirect to='/404' />
                </Switch>
                <Footer />
            </Fragment>
          </Suspense>
        </BrowserRouter>
    </div>
)

export default App
