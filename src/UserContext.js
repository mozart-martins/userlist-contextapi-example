import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
    const [userList, addUser] = useState([
        {
            nome: 'Mozart Dias Martins',
            idade: 48,
            patrimonio: 600000
        },
        {
            nome: 'José de Almeida Andrade',
            idade: 63,
            patrimonio: 1489012
        }
    ])

    return (
        <UserContext.Provider value={[userList, addUser]}>
            {props.children}
        </UserContext.Provider>
    )
}