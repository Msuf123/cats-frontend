import { Link } from "react-router-dom";
import style from './login.module.css'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import post from "./post";

export default function Login(){
    const url=useSelector((state)=>state.url)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // useEffect(()=>{
    //     fetch(url,{credentials:'include'}).then((a)=>a.json()).then((b)=>{
    //         console.log(b)
    //     })
    // },[])
    return(
        <div className={style.main}> 
            <div className={style.box}>
            <input placeholder="Enter username or email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>{
              
              const prom=new Promise((resolve,reject)=>{
                post(url,email,password,resolve,reject)
            })
            prom.then((a)=>{ 
                if(a.authenticate){
                    
                   // dispatch(isAuth())
                }
                else{
                   // dispatch(notAuth())
                }
            }).catch((a)=>console.log(a))
              
            }}>Login</button>
            <button onClick={()=>{
                fetch(url,{credentials:'include'}).then((a)=>a.text()).then((b)=>console.log(b))
            }}>Logout</button>
            <span>Do not have a account? <Link to={"/sign-Up"}>Sign-Up.</Link></span>
            </div>
            
        </div>
    )
}