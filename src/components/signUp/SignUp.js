import React from 'react'
import logoImage from '../../utils/LI-Logo.png'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import signUp from './signUp.css'
import {
    getAuth , createUserWithEmailAndPassword
  } from 'firebase/auth'
import { login, logout } from '../../redux/userSlice'
import { auth } from '../../firebase'
// import AuthUser from '../../redux/userSlice'

function SignUp() {

    const [email , setEmail] = useState('')
    const [userName , setName] = useState('')
    const [password , setPassword] = useState('')
    
    const form = document.querySelector('.sign__form')
    const user = useSelector(state => state.userReducer )
    const dispatch = useDispatch()

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleEmail (e){
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePassword (e){
        e.preventDefault()
        setPassword(e.target.value)
    }

    function resetForm (){
        setPassword('')
        setEmail('')
        setName('')
    }


    function handleSignIn (e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
            dispatch(login({
                name:userName,
                email:cred.user.email
            }))
        })
        .catch(err=>console.log(err))
        console.log(user)
        resetForm()
        
    }



  return (
    <div className="sign">
        <div className="logo">
            <img src={logoImage} alt="" className="sign__logo" />
        </div>
        <div className="sign__info">
            <div className="sign__text">
                <h1>sign in</h1>
                <p>stay updated to professional world</p>
            </div>
            <form action="" className='sign__form' onSubmit={(e) => handleSignIn(e)}>
                <input type="text" className="user__name" placeholder="enter your name" value={userName} onChange={(e) => handleName(e)} required />
                <input type="text" className="sign__email" placeholder="Email" value={email} onChange={(e) => handleEmail(e)} required />
                <input type="password" className="sign__password" placeholder="Password" value={password} onChange={(e)=> handlePassword(e)} required/>
                <a href="">forgot password</a>
                <button className="sign__button" >sign in</button>
            </form>
        </div>
        <div className="sign__up">
            <p>new to linkedin?</p>
            <a href="">join now</a> 
        </div>
    </div>
  )
}

export default SignUp