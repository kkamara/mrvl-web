import React, { useMemo, } from "react"
import { useLocation, } from 'react-router-dom'

export const convertArrayToGETParams = params => {
    const data = []
    for (const key in params) {
        if (
            typeof params[key] !== 'undefined' && 
            null !== params[key]
        ) {
            data.push(`${key}=${params[key]}`)
        }
    }
    return data.join("&")
}

export function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}
