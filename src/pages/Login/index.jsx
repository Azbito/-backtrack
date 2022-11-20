import { useState } from 'react'
import { Link } from 'react-router-dom'
import iconimg from '../../assets/iconimg.png'
import { LayoutComponents } from '../../components/LayoutComponents'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Welcome!</span>

        <span className="login-form-title">
          <img src={iconimg} alt="backtrack" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== '' ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Do you not have an account yet?</span>

          <Link to="/signup " className="txt2">
            Sign up
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}
