import http from '../utils/http'
import {
    ADD,
    MINUS
} from '../constants/counter'

export const add = () => {
    return {
        type: ADD
    }
}
export const minus = () => {
    return {
        type: MINUS
    }
}

// 异步的action
export function asyncAdd () {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}

export function getData({params,callback}) {
    params = params || {}
    return dispatch=>{
        http.get('banner',params).then(json=>{
            callback && callback(json.data)
        })
    }
}
