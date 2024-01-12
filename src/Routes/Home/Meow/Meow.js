import { useDispatch, useSelector } from 'react-redux'
import AllFeatures from './AllFeatures'
import style from './meow.module.css'
import { useEffect, useState } from 'react'
import { isAuth, notAuth } from '../../Login/Login_Reducer/login_reducer'
import Loading from '../../../Common/Loading/Loading'
import { Navigate } from 'react-router-dom'
export default function Meow(){

 
    const url=useSelector((state)=>state.url)
    const auth=useSelector((state)=>state.authicated)
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
  useEffect(()=>{
    console.log(url+'dashboard')
    fetch(url+'dashboard',{credentials:'include'}).then((a)=>a.json()).then((b)=>{
      if(b.authenticate){
        console.log(b)
        dispatch(isAuth())
      }
      else{
        console.log(b.authenticated)
        dispatch(notAuth())
      }
      setLoading(false)
    }).catch((a)=>{
        console.log(a)
    })
  },[auth])
    return(
        <div className={style.main}>
            <div>
           <p>Meow Meow </p>
           <p>Please buy me</p>
           </div>
           <div>
            {loading?<Loading></Loading>:<AllFeatures></AllFeatures>}
           
           </div>
        </div>
    )
}