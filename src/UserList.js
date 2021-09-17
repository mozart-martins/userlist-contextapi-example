import React, {useContext, useEffect} from 'react'
import User from './User'
import {UserContext} from './UserContext'

const UserList = () => {
    //eslint-disable-next-line
    const [userList, addUser] = useContext(UserContext)

    return (
        userList.map(user => (
            <User nome={user.nome} idade={user.idade} patrimonio={user.patrimonio}/>
        ))
    )
}

export default UserList