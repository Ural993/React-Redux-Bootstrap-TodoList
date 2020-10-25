import {LOADING_SHOW, LOADING_HIDE} from './types'
const initialState={
    loading: false
}

export const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOADING_SHOW:
            return{
                ...state, loading: true
            }
        case LOADING_HIDE:
            return{
                ...state, loading: false
            }
        default: return state
    }
}