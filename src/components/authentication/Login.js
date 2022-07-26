import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authAction } from '../../redux/auth.slice.redux'
const Login = () => {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: ""
  // })
  // const onChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value })
  // }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authAction.login({
      email: email,
      password: password,
      loggedIn: true
    }))
  }
  return (
    <>
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <Link to="index"><img src="images/logo.png" alt="logo" /></Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <Link to="#" className="facebook"><i className="fab fa-facebook-f" />login with facebook</Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter"><i className="fab fa-twitter" />login with twitter</Link>
                    </li>
                    <li>
                      <Link to="#" className="google"><i className="fab fa-google" />login with google</Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram"><i className="fab fa-instagram" />login with instagram</Link>
                    </li>
                  </ul>
                  <div className="user-form-divider"><p>or</p></div>
                  <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                      <input type="email" name='email' value={email} className="form-control" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <input type="password" value={password} className="form-control" name='password' placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Remember Me</label>
                    </div>
                    <div className="form-button">
                      <button type="submit">login</button>
                      <p>
                        Forgot your password?<Link to="/change-password">reset here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?<Link to="register">register here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                {/* <p>Greeny | © Copyright by <Link to="#">Mironcoder</Link></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login