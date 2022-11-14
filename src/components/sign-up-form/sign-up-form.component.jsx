import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


    const defaultFormFields = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }



const SignUpForm = () => {

const [formFields, setFormFields] = useState(defaultFormFields)
const {username, email, password, confirmPassword} = formFields

console.log(formFields);

const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
        alert('Passwords not matching')
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password) 

        await createUserDocumentFromAuth(user, {username})
        resetFormFields()
    } catch(error) {
        if(error.code = 'auth/email-already-in-use') {
            alert('Email already in use. Cannot create user with the same email')
          } else {
        console.log('Something went wrong when creating a user', error);
          }}
}

const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
}

    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" required placeholder="Enter your username" onChange={handleChange} name='username' value={username}/>

                <label htmlFor="">Email</label>
                <input type="email" required placeholder="Enter your email" onChange={handleChange} name='email' value={email}/>

                <label htmlFor="">Password</label>
                <input type="password" required placeholder="Enter your password" onChange={handleChange} name='password' value={password}/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" required placeholder="Confirm your password" onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign up</button>

            </form>
        </div>
    )
}
export default SignUpForm