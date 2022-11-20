import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutComponents } from '../../components/LayoutComponents'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">
          Please, fill the blanks with correct informations
        </span>

        <div className="wrap-input">
          <input
            className={name !== '' ? 'has-val input' : 'input'}
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Name"></span>
        </div>

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
          <button className="login-form-btn">Sign up</button>
        </div>

        <div className="text-center">
          <span className="txt1">Do you already have an account?</span>

          <Link to="/" className="txt2">
            Sign in
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}
