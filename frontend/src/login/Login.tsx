import Cookies from 'js-cookie'
import { useState, type ChangeEvent, type FormEvent } from "react"
import Suggestions from '../suggestions/Suggestions'

interface Login {
    email: string,
    password: string
}

interface Loginprops {
    setShowLogin: Function
}

const login = async (data: Login, isSignUp: boolean) => {
    const response = await fetch(`http://localhost:3000/api/auth/${isSignUp ? 'register' : 'login'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

const Login = ({ setShowLogin }: Loginprops) => {
    const [isSignUp, setIsSignup] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
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
        const res = await login(data, isSignUp)
        if (res && res.success) {
            Cookies.set('token', res.token)
            if (isSignUp) {
                setShowSuggestions(true)
            } else {
                setShowLogin(false)
            }
        }
    }

    return (
        <div>
            {showSuggestions ? <Suggestions setShowLogin={setShowLogin} /> : <div className='h-screen flex justify-center items-center'>
                <div className='bg-gray-800 items-center justify-center flex flex-col p-12 rounded-xl'>
                    <div className="flex gap-2">
                        <button className={`${!isSignUp && 'bg-gray-700'} px-4 py-2 rounded-xl outline-none focus:ring-1`} onClick={() => setIsSignup(false)}>Login</button>
                        <button className={`${isSignUp && 'bg-gray-700'} px-4 py-2 rounded-xl outline-none focus:ring-1`} onClick={() => setIsSignup(true)}>SignUp</button>
                    </div>
                    <input className='mt-8 text-center outline-none border-b-1 placeholder-gray-400' type="text" placeholder='Enter email' onChange={handleEmailChange} /><br />
                    <input className='mt-3 text-center outline-none border-b-1 placeholder-gray-400' type="password" placeholder='Enter password' onChange={handlePasswordChange} />
                    <button className='mt-9 bg-gray-700 px-4 py-2 cursor-pointer rounded-2xl hover:bg-gray-600 focus:outline-1 focus:outline-gray-100' type='submit' onClick={handleSubmit}>{isSignUp ? 'SignUp' : 'Login'}</button>
                </div>
            </div>}
        </div>
    )
}

export default Login