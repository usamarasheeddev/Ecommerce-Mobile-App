import React, { useContext, useState, createContext } from 'react'

const PostsContext = createContext()
export default function PostContextProvider({ children }) {
    const [post, setPost] = useState([])

    console.log(post)
    return (
        <PostsContext.Provider value={{ post, setPost }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostContext = () => {
    return useContext(PostsContext)
}