import React from 'react'

const User = props => {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Patrimônio: {props.patrimonio}</p>
        </div>
    )
}

export default User