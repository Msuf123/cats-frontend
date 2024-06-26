import { Navigate } from "react-router-dom";
import Loading from "../../Common/Loading/Loading";
import Cats from "./Cats/Cats";
import Filter from "./Filter/Filter";
import style from './dashboard.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login_Popup from "../Login/Login_Request/Login_Popup";
import { isAuth, notAuth } from "../Login/Login_Reducer/login_reducer";

export default function Dashboard(){
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
    })
  },[auth])
    return(
      <div>
      {loading?<Loading></Loading>:
        <div>
  
       {auth?<div className={style.main}>
          <h1 className={style.heading}>Cat Home</h1>
              
                  <div className={style.filter}>
                    <Filter></Filter>
                  </div>
                
                  <div className={style.catsdiv}>
                  
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  <Cats name={'Abhi'} age={'56'} price={'56'}></Cats>
                  
                  </div>
                
        </div>:
        <Login_Popup></Login_Popup>}
        </div>}
        </div>
    )
}