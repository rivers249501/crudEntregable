import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faLock, faBirthdayCake } from "@fortawesome/free-solid-svg-icons"

const defaultValues = {first_name:"", last_name:"", email:"", birthday:"", password:""}
const UsersForm = ({getUsers, userSelected, deselectUser}) => {
const { register, handleSubmit, reset } = useForm();
	

	useEffect(() =>{
		if (userSelected){
			console.log(userSelected)
				reset(userSelected)
		} else{
			reset(defaultValues);
		}
	},[userSelected, reset])

    const submit = (user) =>{
		if(userSelected){
			axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
				.then(() => getUsers())
				deselectUser();
			} else{
			axios.post("https://users-crud1.herokuapp.com/users/", user)
			.then(() => getUsers())
			
		}
		reset(defaultValues)
    }

    return (
	<div className="container">
		
        <form onSubmit={handleSubmit(submit)}>
			<div className="form">
				<FontAwesomeIcon icon={faUser}/>
					<div className="form" > 
						<input type='text' placeholder='first name' id='name-input' {...register("first_name")} />
						<input type='text' placeholder='last name' id='lastname-input' {...register("last_name")} /> 
					</div>
			</div>
				<div className="form">
					<FontAwesomeIcon icon={faEnvelope}/>
					<input type='email' placeholder='email' id='email-input' {...register("email")} />	
				</div>
		
				<div className="form">
					<FontAwesomeIcon icon={faLock}/>
					<input type="password" placeholder='password' id='password-input' {...register("password")} />
				</div>
				<div className="form">
				<FontAwesomeIcon icon={faBirthdayCake}/>
						<label htmlFor='birthday'></label>
						<input type='date' id='birthday' {...register("birthday")} />
				</div>
				<div className="boton">
        	    		<button type="submit">Submit</button>
						<button onClick={()=>deselectUser}>Cancel</button>
				</div>
		</form>
		</div>	
	

    )
}

export default UsersForm
