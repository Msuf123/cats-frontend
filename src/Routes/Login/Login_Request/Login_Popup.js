import { Link } from 'react-router-dom'
import Login from '../Login'
import style from './login.module.css'
import { useState } from 'react'
import post from '../post'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth, notAuth } from '../Login_Reducer/login_reducer'
export default function Login_Popup(){
    const url=useSelector((state)=>state.url)
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const [password,setPassword]=useState('')
    return(
        <div className={style.outer}>
        <div className={style.main}>
        <input placeholder='Uername or emailid'  value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        
        <button onClick={()=>{
            const prom=new Promise((resolve,reject)=>{
                post(url,email,password,resolve,reject)
            })
            prom.then((a)=>{ 
                if(a.authenticate){
                    
                    dispatch(isAuth())
                }
                else{
                    dispatch(notAuth())
                }
            }).catch((a)=>console.log(a))
            
        }}>Login</button>
        <span>Do not have a account? <Link to={"/sign-Up"}>Sign-Up.</Link></span>
        </div>
        </div>
    )
}