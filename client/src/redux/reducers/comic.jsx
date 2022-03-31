import { comicActions, } from "./types"

const initialState = {
    data: false
}
const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case comicActions.GET_CHARACTER_PENDING:
            return { ...state, fetched: false, isLoaded: false }
        case comicActions.GET_CHARACTER_ERROR:
            return {
                ...state,
                fetched: false,
                isLoaded: true,
                error: action.payload
            }
        case comicActions.GET_CHARACTER_SUCCESS:
            return {
                ...state,
                fetched: true,
                isLoaded: true,
                data: action.payload
            }
    }

    return state
}
export default comicReducer
