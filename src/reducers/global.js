import { SHOW_MODEL, CLOSE_MODEL } from '../constants/global'

const INITIAL_STATE = {
    title: '提示',
    content: '这里有一个错误',
    visible: false,
    closable: false,
    popup: true,
    transparent: true,
    platform: 'ios',
    footer:[
        {text:'确定',onPress: ()=>{}}
    ],
    animationType: 'slide'
}

export default function global(state = INITIAL_STATE, action) {
    switch (action.type){
        case SHOW_MODEL:
            return {
                ...state,
                ...action.state
            }
        case CLOSE_MODEL:
            return {
                ...state,
                visible: false
            }
        default:
            return state
    }
}
