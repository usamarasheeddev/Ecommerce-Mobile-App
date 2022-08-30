import React, { useContext, useState, createContext } from 'react'
import firestore from '@react-native-firebase/firestore';

const PostsContext = createContext()
export default function PostContextProvider({ children }) {
    let arr = []
    const [post, setPost] = useState([ ])
    const[isLoadingPost,setIsLoadingPost]=React.useState(false)
    React.useEffect(() => {
        getFromFirebase()
    }, [])


    const getFromFirebase = () => {

        firestore()
            .collection('Posts')
            .get()
            .then(querySnapshot => {
                // console.log('Total posts: ', querySnapshot.size);

                querySnapshot.forEach(doc => {
                    arr.push({ ...doc.data(), id: doc.id })
                    // console.log(querySnapshot.size)
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
                setPost(arr)
                setIsLoadingPost(true)
            });
    }
    return (
        <PostsContext.Provider value={{ post, setPost,setIsLoadingPost,isLoadingPost }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostContext = () => {
    return useContext(PostsContext)
}