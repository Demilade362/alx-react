import "./Login.css";

const Login = () => {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <section className='form-inputs'>
                <section className='input'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' />
                </section>
                <section className='input'>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' />
                </section>
                <button>OK</button>
            </section>
        </>
    );
}

export default Login;