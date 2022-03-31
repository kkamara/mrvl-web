import { comicsActions } from "./types"

const initialState = {
    data: false,
    fetched: false,
    loading: true,
}
const comicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case comicsActions.GET_COMICS_PENDING:
            return { ...state, fetched: false, loading: false }
        case comicsActions.GET_COMICS_ERROR:
            return {
                ...state,
                fetched: false,
                loading: true,
                error: action.payload
            }
        case comicsActions.GET_COMICS_SUCCESS:
            return {
                ...state,
                fetched: true,
                loading: true,
                data: action.payload
            }
    }

    return state
}

export default comicsReducer
