import React, { createContext, useContext } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const FavuriteItemContext = createContext()

// let favItems = []
export default function FavuriteItemsContextProvider({ children }) {
    const [favuriteItem, setFavuriteItem] = React.useState([])


   

    //SET FAVURITE ITEM
    const likePost = async (id) => {

      
        await firestore()
            .collection('favuriteItems').doc(auth().currentUser.uid).collection('likedPosts').doc(id)
            .set({
                isLiked: true

            })
            .then(() => {
                console.log(id, ' Liked');
            }).catch(err => {
                console.error(err)
            })
    }

    //REMOVE FAVURITE ITEMS
    const unLikePost = async (id) => {

        await firestore()
            .collection('favuriteItems').doc(auth().currentUser.uid).
            collection('likedPosts').doc(id).delete().then(() => console.log('Deleted sucessfilly')).
            catch((error) => console.log(error))

    }



    return (
        <FavuriteItemContext.Provider value={{
            favuriteItem, setFavuriteItem,
            likePost, unLikePost
        }}>
            {children}
        </FavuriteItemContext.Provider>
    )
}

export const useFavuriteItemsContext = () => {
    return useContext(FavuriteItemContext)
}