import { combineReducers } from "redux"

import searchComicsReducer from "./searchComics"
import comicsFiltersReducer from "./comicsFilters"
import comicsReducer from "./comics"
import comicReducer from "./comic"

export default combineReducers({
    comicsFilters: comicsFiltersReducer,
    searchComics: searchComicsReducer,
    comics: comicsReducer,
    comic: comicReducer,
})
