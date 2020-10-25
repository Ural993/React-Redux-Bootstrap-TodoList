import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Input } from '../components/Input'
import { Loader } from '../components/Loader'
import { Posts } from '../components/Posts'
import { addPost, fetchPosts, removePost } from '../redux/actions'

const Home = ({posts, addPost, fetchPosts, removePost, loading})=>{
    useEffect(()=>{
        fetchPosts()
    },[])
    return(
        <div>   
            <Input addPost={addPost}/>
            <hr/>
            {loading && <Loader/>}
            <Posts posts={posts} removePost={removePost}/>
            
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        posts: state.posts.posts,
        loading: state.app.loading
    }
}

export default connect(mapStateToProps, {addPost, fetchPosts, removePost})(Home)