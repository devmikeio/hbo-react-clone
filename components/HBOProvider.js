import React, {useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('')
    const defaultUserImage = 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/05/Batman-Lollipops.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user)
    }

    return(
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImage
        }}>
            {children}
        </StateContext.Provider>
    )
}