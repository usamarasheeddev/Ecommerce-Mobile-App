import React, { createContext, useContext } from 'react'
const FavuriteItemContext = createContext()


// let favItems = []
export default function FavuriteItemsContextProvider({ children }) {
    const [favuriteItem, setFavuriteItem] = React.useState([])

    //SET FAVURITE ITEM



    const addFavuriteItem = async (id) => {

        !favuriteItem.find((elem) => elem.id === id) ? setFavuriteItem(
            s => ([...s, { id }])) : null

        await firestore()
            .collection('favuriteItems').doc(id)
            .set({ favuriteItem })
            .then(() => {
                console.log('User added!');
                alert('user added')
            }).catch(err => {
                console.error(err)
                alert(err)
            })
    }




    return (
        <FavuriteItemContext.Provider value={{ favuriteItem, setFavuriteItem, addFavuriteItem }}>
            {children}
        </FavuriteItemContext.Provider>
    )
}

export const useFavuriteItemsContext = () => {
    return useContext(FavuriteItemContext)
}