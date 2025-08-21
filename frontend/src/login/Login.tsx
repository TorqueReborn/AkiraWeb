import Cookies from 'js-cookie'
import { useState, type ChangeEvent, type FormEvent } from "react"

interface Login {
    email: string,
    password: string
}

interface LoginProps {
    setIsLoggedIn: Function
}

const login = async (data: Login) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

const Login = ({setIsLoggedIn}: LoginProps) => {

    const [data, setData] = useState<Login>({
        email: '',
        password: ''
    })

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            email: e.target.value
        })
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            password: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await login(data)
        if (res && res.success) {
            Cookies.set('token', res.token)
            setIsLoggedIn(true)
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-gray-800 items-center justify-center flex flex-col p-12 rounded-xl'>
                <h1 className='text-3xl'>Login</h1>
                <input className='mt-8 text-center outline-none border-b-1 w-8/10' type="text" placeholder='Enter email' onChange={handleEmailChange}/><br />
                <input className='mt-6 text-center outline-none border-b-1 w-8/10' type="password" placeholder='Enter password' onChange={handlePasswordChange} />
                <button className='mt-6 bg-gray-700 px-4 py-2 cursor-pointer rounded-2xl hover:bg-gray-600 focus:outline-1' type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login