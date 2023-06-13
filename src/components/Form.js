import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {
  const [eM, setEM] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(null)

  function onForgotPass(evnt) {
    evnt.preventDefault()
    if (!isFormValid()) {
      setError('Please enter a valid email or phone number above.')
    } else {
      setError(null)
      //process request
    }
  }
  function onEmailMobChangeHandler(evnt) {
    if (error && isEmailMobValid(evnt.target.value)) {
      setError(null)
    }
    setEM(evnt.target.value)
  }
  function onPassChangeHandler(evnt) {
    if (error && isPassValid(evnt.target.value)) {
      setError(null)
    }
    setPass(evnt.target.value)
  }

  function isFormValid() {
    return isEmailMobValid() && isPassValid()
  }
  function isEmailMobValid() {
    return eM.trim().length && ((/.*@gmail.com$/).test(eM) || (/\d{10}$/).test(eM))
  }
  function isPassValid() {
    return pass.trim().length && pass.length >= 8
  }

  function onLoginHandler(evnt) {
    evnt.preventDefault()

    //process request
  }

  return <form>
    <div className={styles['form_control']}>
      <label htmlFor='emal_mobile'>Email address or Mobile</label>
      <input onChange={onEmailMobChangeHandler} id='emal_mobile' name='email_mobile' type='text' placeholder='Email address or Mobile' />
    </div>
    <div className={styles['form_control']}>
      <label htmlFor='passsword'>Password</label>
      <input onChange={onPassChangeHandler} id='password' name='password' type='text' placeholder='Password' />
    </div>
    <div className={styles.actions}>
      <button className={styles['btn-forgot']} onClick={onForgotPass} href='#'>Forgot password?</button>
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={onLoginHandler} className={styles['btn-login']} disabled={!isFormValid()}>LOGIN</button>
    </div>
  </form>
}
