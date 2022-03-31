import { comicsActions } from "./types"

const initialState = {
    data: false
}
const comicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case comicsActions.GET_CHARACTERS_PENDING:
            return { ...state, fetched: false, isLoaded: false }
        case comicsActions.GET_CHARACTERS_ERROR:
            return {
                ...state,
                fetched: false,
                isLoaded: true,
                error: action.payload
            }
        case comicsActions.GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                fetched: true,
                isLoaded: true,
                data: action.payload
            }
    }

    return state
}

export default comicsReducer
