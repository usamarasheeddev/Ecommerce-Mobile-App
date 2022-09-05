import React, { useContext, useState, createContext } from 'react'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'

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

                });
                setPost(arr)
                setIsLoadingPost(true)
                // console.log(post)
                // getFromDb()
                // console.log(post)
                
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

    //Get Liked posts

    //Get favurite Items
    // let likeArr = []
    // const getFromDb = async () => {
    //     await firestore().collection('favuriteItems')
    //         .doc(auth().currentUser.uid)
    //         .collection('likedPosts').get().then((docs) => {
    //             docs.forEach((doc) => { likeArr.push({ ...doc.data(), id: doc.id }) })
    //         })

    //         console.log(likeArr)
    //     likeArr.forEach(doc => {
    //         setPost(
    //             post.map((item) => item.id == doc.id ? { ...item,isLiked: doc.isLiked } : item)
    //          )
    //     })
    // }


    return (
        <PostsContext.Provider value={{ post, setPost, setIsLoadingPost, isLoadingPost, handleDel }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostContext = () => {
    return useContext(PostsContext)
}