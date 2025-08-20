const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-amber-300 items-center justify-center flex flex-col p-12 rounded-xl'>
                <h1 className='text-3xl'>Login</h1>
                <input className='mt-8 text-center border-b-1 w-8/10' type="text" placeholder='Enter username' /><br />
                <input className='mt-6 text-center border-b-1 w-8/10' type="password" placeholder='Enter password' />
                <button className='mt-6 bg-white px-4 py-2 cursor-pointer rounded-2xl' type='submit'>Login</button>
            </div>
        </div>
    )
}

export default Login