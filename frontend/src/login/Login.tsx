import { useState, type ChangeEvent, type FormEvent } from "react"

interface LoginProps {
    email: string,
    password: string
}

const login = async (data: LoginProps) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

const Login = () => {
    const [data, setData] = useState<LoginProps>({
        email: '',
        password: ''
    })

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            email: e.target.value
        })
        console.log(data)
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
        console.log(res)
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-amber-300 items-center justify-center flex flex-col p-12 rounded-xl'>
                <h1 className='text-3xl'>Login</h1>
                <input className='mt-8 text-center border-b-1 w-8/10' type="text" placeholder='Enter email' onChange={handleEmailChange}/><br />
                <input className='mt-6 text-center border-b-1 w-8/10' type="password" placeholder='Enter password' onChange={handlePasswordChange} />
                <button className='mt-6 bg-white px-4 py-2 cursor-pointer rounded-2xl' type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login