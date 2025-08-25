import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Verify = () => {
  const { token } = useParams()
  const [validToken, setValidToken] = useState(false)
  const [message, setMessage] = useState('Checking token...')
  const [password, setPassword] = useState('')

  const changePassword = async (token: string, password: string) => {
    const response = await fetch(`http://localhost:3000/api/auth/verify/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password
      })
    })
    const rawJSON = await response.json()
    setMessage(rawJSON.message)
  }

  const handleClick = () => {
    changePassword(token, password)
  }

  useEffect(() => {
    const checkToken = async () => {
      const body = {
        refreshToken: token
      }
      console.log(body)
      const response = await fetch('http://localhost:3000/api/auth/checkRefreshToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const rawJSON = await response.json()
      setValidToken(rawJSON.success)
      setMessage(rawJSON.message)
    }
    checkToken()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {validToken ? <div>
        Reset Password
        <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm new password" />
        <button onClick={handleClick}>Change Password</button>
      </div> : <p>{message}</p>}
    </div>
  )
}

export default Verify