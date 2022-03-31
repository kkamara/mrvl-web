// import { API_URL } from "../../constants"
import { comicsActions, } from "../reducers/types"

export function getComic(id) {
    return async dispatch => {
        return
        // dispatch(request(comicsActions.GET_COMIC_PENDING))
        // let url = API_URL + `/characters/${id}`

        // url = encodeURI(url)
        // await fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         const payload = json.data ? json.data : false
        //         dispatch(success(comicsActions.GET_COMIC_SUCCESS, payload))
        //     })
        //     .catch(err => {
        //         dispatch(error(comicsActions.GET_COMIC_ERROR, err))
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
