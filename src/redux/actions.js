import axios from "axios"

export const addPost =(title)=>{

    return async dispatch  =>{
        const url='https://react-todolist-49b24.firebaseio.com'
        const notes={
            title:title, date: new Date().toLocaleDateString()
        }
        const res = await axios.post(`${url}/notes.json`, notes)
        const payload={
            ...notes, id:res.data.name
        }
        dispatch({type:'ADD_POST', payload})
    }
}
export const fetchPosts = ()=>{
    return async dispatch=>{
    dispatch(showLoader())
    const url='https://react-todolist-49b24.firebaseio.com'
    const res = await axios.get(`${url}/notes.json`)
    dispatch(hideLoader())
    const payload =[]
    for (var key in res.data){
        payload.push({...res.data[key], id:key})
    }
    dispatch({type:'FETCH_POSTS', payload})  
}
}
export const removePost =(id)=>{
    return async dispatch =>{
        const url='https://react-todolist-49b24.firebaseio.com'
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({type:'REMOVE_POST', payload:id})
    }
}
 
export const showLoader = ()=>{
    return {type:'LOADING_SHOW'}
}
export const hideLoader = ()=>{
    return {type:'LOADING_HIDE'}
}