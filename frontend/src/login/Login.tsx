import Cookies from 'js-cookie'
import { useState, type ChangeEvent, type FormEvent } from "react"

interface Login {
    email: string,
    password: string
}

interface LoginProps {
    setIsLoggedIn: Function
}

const login = async (data: Login, isSignUp: boolean) => {
    const response = await fetch(`http://localhost:3000/api/auth/${isSignUp ? 'register': 'login'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
    const [isSignUp, setIsSignup] = useState(false)
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

    const handleSignUpChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSignup(e.target.value === 'signup')
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await login(data, isSignUp)
        if (res && res.success) {
            Cookies.set('token', res.token)
            setIsLoggedIn(true)
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-gray-800 items-center justify-center flex flex-col p-12 rounded-xl'>
                <div className="flex gap-2">
                    <label className={`${!isSignUp ? 'bg-gray-700': ''} px-4 py-2 rounded-xl`}>
                        Login
                        <input className='hidden' type="radio" name="sign" id="login" value="login" onChange={handleSignUpChange} />
                    </label>
                    <label className={`${isSignUp ? 'bg-gray-700': ''} px-4 py-2 rounded-xl`}>
                        SignUp
                        <input className='hidden' type="radio" name="sign" id="signup" value="signup" onChange={handleSignUpChange} />
                    </label>
                </div>
                <input className='mt-8 text-center outline-none border-b-1 w-8/10' type="text" placeholder='Enter email' onChange={handleEmailChange} /><br />
                <input className='mt-6 text-center outline-none border-b-1 w-8/10' type="password" placeholder='Enter password' onChange={handlePasswordChange} />
                <button className='mt-6 bg-gray-700 px-4 py-2 cursor-pointer rounded-2xl hover:bg-gray-600 focus:outline-1' type='submit' onClick={handleSubmit}>{isSignUp ? 'SignUp' : 'Login'}</button>
            </div>
        </div>
    )
}

export default Login