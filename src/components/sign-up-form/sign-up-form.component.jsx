const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={()=>{}}>
                <label htmlFor="">Username</label>
                <input type="text" required placeholder="Enter your username"/>

                <label htmlFor="">Email</label>
                <input type="email" required placeholder="Enter your email"/>

                <label htmlFor="">Password</label>
                <input type="password" required placeholder="Enter your password"/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" required placeholder="Confirm your password"/>
                <button type='submit'>Sign up</button>

            </form>
        </div>
    )
}
export default SignUpForm