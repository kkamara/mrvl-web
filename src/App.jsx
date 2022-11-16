import { HashRouter, Switch, Redirect, Route, } from 'react-router-dom'
import React, { Fragment, lazy, Suspense, } from 'react'

import $ from'jquery'
import Popper from'popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import Header from './components/Header'
import Loader from "./components/Loader"

import FavouriteComicsPage from './components/FavouriteComics/FavouriteComicsPage'
import HomePage from './components/Comics/HomePage'
import ComicPage from './components/Comics/ComicPage'
import SearchComicsPage from './components/Comics/SearchComicsPage'
import Page404 from './components/Page404'
import Footer from './components/Footer'

const App = () => (
  <div id='app'>
    <HashRouter basename='/mrvl'>
      <Fragment>
        <Header />
        {/* <Switch> */}
            <Route path='/' component={HomePage} />
            <Route path='/comic/:comic' component={ComicPage} />
            <Route path='/search' component={SearchComicsPage} />
            <Route path='/favs' component={FavouriteComicsPage} />
            <Route path='/404' component={Page404} />
            {/* <Redirect to='/404' />
        </Switch> */}
        <Footer />
      </Fragment>
    </HashRouter>
  </div>
)

export default App
