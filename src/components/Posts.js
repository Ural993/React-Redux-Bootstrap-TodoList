import React from 'react'

export const Posts = ({posts, removePost})=>{
    return(
        <div>
           <ul className="list-group">
               {posts.map(post=>(
               <li 
                className="list-group-item post" 
                key={post.id}>
                    <div>
                    <strong>{post.title}</strong>
                    <small>{' '+post.date}</small>
                    </div>              
                    <button prymary
                        className="btn btn-outline-dark btn-sm"
                        onClick={()=>{
                            removePost(post.id)}}
                        >&times;</button>
                </li>))}
            </ul> 
        </div>
    )
}