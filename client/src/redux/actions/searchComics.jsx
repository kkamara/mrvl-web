// import { APP_URL } from "../../constants"
import { searchComicsActions, } from "../reducers/types"
import { useQuery, } from "../../utilities/methods"

export function searchComics(pageNumber = null, params = {}) {
    return async dispatch => {
        return
        // dispatch(request(searchComicsActions.SEARCH_CHARACTERS_PENDING))
        // let url = APP_URL + "/characters/search"

        // let GETVars = convertArrayToGETParams(params)

        // if (pageNumber) {
        //     url += `?page=${pageNumber}`

        //     if (GETVars.length > 0) {
        //         url += `&${GETVars}`
        //     }
        // } else {
        //     if (GETVars.length > 0) {
        //         url += `?${GETVars}`
        //     }
        // }
        // url = encodeURI(url)
        // await fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         const payload = json.errors ?
        //             { errors: json.errors } :
        //             {
        //                 filters: json.filters,
        //                 ...json.data,
        //             }
        //         dispatch(success(searchComicsActions.SEARCH_CHARACTERS_SUCCESS, payload))
        //     })
        //     .catch(err => {
        //         dispatch(error(searchComicsActions.SEARCH_CHARACTERS_ERROR, err))
        //     })

        function request(type) {
            return {
                type
            }
        }

        function error(type, payload) {
            return {
                type,
                payload
            }
        }

        function success(type, payload) {
            return {
                type,
                payload
            }
        }
    }
}