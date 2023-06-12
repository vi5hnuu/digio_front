import logo from './assets/images/logo.png'
import google from './assets/images/google_new.png'
import styles from './App.module.css'
import ProductDetail from './components/ProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store/slices/crousel_slice'
import { useEffect } from 'react'

function App() {
  const cstate = useSelector(state => state.crousel_reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const intr = setInterval(() => {
      dispatch(actions.move())
    }, 4000)
    return () => {
      clearInterval(intr)
    }
  }, [dispatch])

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.auth_container}>
          <div className={styles['auth_container_icon']}>
            <img style={{ width: 89, height: 50 }} src={logo} alt='digo logo' />
          </div>
          <div className={styles['google_auth']}>
            <img src={google} alt='google auth' />
            <span>Sign in with Google</span>
          </div>
          <div className={styles['divider--line']}>
            <div className={styles['divider']}></div>
            <span>or</span>
            <div className={styles['divider']}></div>
          </div>
          <form>
            <div className={styles['form_control']}>
              <label htmlFor='emal_mobile'>Email address or Mobile</label>
              <input id='emal_mobile' name='email_mobile' type='text' placeholder='Email address or Mobile' />
            </div>
            <div className={styles['form_control']}>
              <label htmlFor='passsword'>Password</label>
              <input id='password' name='password' type='text' placeholder='Password' />
            </div>
            <div className={styles.actions}>
              <a href='#'>Forgot password?</a>
              <button>LOGIN</button>
            </div>
          </form>
          <p className={styles.info}>
            This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
          </p>
        </div>
      </section>
      <section className={styles.aside}>
        <ProductDetail product={cstate.products[cstate.activeIndex]} />
        <div className={styles['crousel-indicator']}>
          {/* can be a seperate component */}
          <div
            onClick={() => { dispatch(actions.to({ idx: 0 })) }}
            className={`${styles.dot} ${cstate.activeIndex === 0 ? styles.active : ''}`}></div>
          <div
            onClick={() => { dispatch(actions.to({ idx: 1 })) }}
            className={`${styles.dot} ${cstate.activeIndex === 1 ? styles.active : ''}`}></div>
          <div
            onClick={() => { dispatch(actions.to({ idx: 2 })) }}
            className={`${styles.dot} ${cstate.activeIndex === 2 ? styles.active : ''}`}></div>
          <div
            onClick={() => { dispatch(actions.to({ idx: 3 })) }}
            className={`${styles.dot} ${cstate.activeIndex === 3 ? styles.active : ''}`}></div>
        </div>
      </section>
    </main>
  )
}

export default App;
