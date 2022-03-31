import { combineReducers } from "redux"

import searchComicsReducer from "./searchComics"
import comicsReducer from "./comics"
import comicReducer from "./comic"

export default combineReducers({
    searchComics: searchComicsReducer,
    comics: comicsReducer,
    comic: comicReducer,
})
