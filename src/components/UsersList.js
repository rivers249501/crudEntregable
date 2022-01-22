import React from 'react'
import "../styles/styles.css"
import axios from 'axios'

const UsersList = ({users, changeUser, getUsers}) => {

    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}` )
            .then(() => getUsers()) 
    }
    return (
            <div className='userList'>

                {
                users.map((user)=>(
                    <ul key={user.id}> 
                        <li>{user.first_name}</li>
                        <li>{user.last_name}</li>
                        <li>{user.email}</li>
                        <li>{user.birthday}</li>
                        <button onClick={() => deleteUser(user.id)} >Eliminar</button>
                        <button onClick={() => changeUser(user) }>Editar</button>
                    </ul>    
                    ))
                }
            </div>
    )
}

export default UsersList
