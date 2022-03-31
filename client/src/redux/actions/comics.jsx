// import { APP_URL } from "../../constants"
import { comicsActions, } from "../reducers/types"

export function getComics(pageNumber = null) {
    return async dispatch => {
        return
        // dispatch(request(comicsActions.GET_COMICS_PENDING))
        // let url = APP_URL + "/characters"

        // if (pageNumber) url += `?page=${pageNumber}`

        // url = encodeURI(url)
        // await fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch(
        //             success(comicsActions.GET_COMICS_SUCCESS, json.data)
        //         )
        //     })
        //     .catch(err => {
        //         dispatch(error(comicsActions.GET_COMICS_ERROR, err))
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
