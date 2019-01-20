import Fetch from 'cross-fetch'
import { store } from '../index'
import history from '../router/history'
import config from './config'
import {SHOW_MODEL, CLOSE_MODEL} from "../constants/global";


export default {
    request(api_name, params, method) {
        let props = {}, url = ''
        //处理api_name
        if (typeof (config.api[api_name]) === 'undefined') {
            this.alertError(`接口${api_name}未定义`);
            return false;
        }else{
            url = config.host + config.api[api_name]
        }

        //处理token
        // if(config.unAuthApi.indexOf(api_name) === -1){
        //     params.token = localStorage.getItem('token')
        // }

        //处理method,params
        if(!method) method = 'GET'
        if (method === 'GET') {
            if (params) {
                let paramsArray = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            props = {
                method: method
            }
        } else {
            props = {
                method: method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            }
        }

        //发送请求
        return Fetch(url, props).then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
        .then((json)=>{
            switch (json.code) {
                case 1:
                    return json
                default:
                    this.alertError(json.message)
                    return
            }
        })
        .catch((error) => {
            alert(error)
        });
    },

    alertError(message){
        store.dispatch({
            type: SHOW_MODEL,
            state: {
                visible: true,
                content: message,
                footer: [
                    {
                        text: '确定',
                        onPress: () => {
                            store.dispatch({type: CLOSE_MODEL})
                        }
                    }
                ]
            }
        })
    },

    get(api_name, params) {
        return this.request(api_name, params, 'GET')
    },

    post(api_name, params) {
        return this.request(api_name, params, 'POST')
    }
}