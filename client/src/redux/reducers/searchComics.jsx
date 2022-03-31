import { searchComicsActions, } from "./types"

const initialState = {
    data: false
}
const searchComicReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchComicsActions.SEARCH_COMICS_PENDING:
            return { ...state, fetched: false, loading: false }
        case searchComicsActions.SEARCH_COMICS_ERROR:
            return {
                ...state,
                fetched: false,
                loading: true,
                error: action.payload
            }
        case searchComicsActions.SEARCH_COMICS_SUCCESS:
            return {
                ...state,
                fetched: true,
                loading: true,
                data: action.payload
            }
    }

    return state
}

export default searchComicReducer
