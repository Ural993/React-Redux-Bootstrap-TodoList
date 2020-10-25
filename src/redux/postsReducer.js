const { ADD_POST, FETCH_POSTS, REMOVE_POST, LOADING_CHANGE } = require("./types")

const initialState={
    posts:[],
    loading: false
}

export const postsReducer=(state= initialState, action)=>{
  switch(action.type){
      case ADD_POST:
          return{
           ...state, posts: state.posts.concat(action.payload)
          }
      case FETCH_POSTS:
          return {
              ...state, posts: action.payload
          }
      case REMOVE_POST:
          return{
              ...state, posts: state.posts.filter(n=>{
                return n.id !== action.payload})
          }
      case LOADING_CHANGE:
          return{
              ...state, loading: true
          }
          default: return state
        }
}