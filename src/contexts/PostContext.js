import React, { useContext, useState, createContext } from 'react'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage'

const PostsContext = createContext()
export default function PostContextProvider({ children }) {
    let arr = []
    const [post, setPost] = useState([])
    const [isLoadingPost, setIsLoadingPost] = React.useState(false)
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

    //Delete a post form firebase
    const handleDel = async (item) => {
        setPost(post.filter(elem => elem.id !== item.id))

        await storage().ref(`images/${item.newPost.imgName}`).delete()
            .then(() => {
                console.log(`${item.newPost.imgName} has been deleted successfully.`);
            })
            .catch((e) => console.log('error on image deletion => ', e));


        await firestore().collection('Posts').doc(item.id).delete()
            .then(() => { console.log("successfully deleted! ") })
            .catch((error) => { console.log("Error removing document:", error) })
    }
    return (
        <PostsContext.Provider value={{ post, setPost, setIsLoadingPost, isLoadingPost, handleDel }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostContext = () => {
    return useContext(PostsContext)
}