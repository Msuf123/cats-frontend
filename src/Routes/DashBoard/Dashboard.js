import { Navigate } from "react-router-dom";
import Loading from "../../Common/Loading/Loading";
import Cats from "./Cats/Cats";
import Filter from "./Filter/Filter";
import style from './dashboard.module.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Login_Popup from "../Login/Login_Request/Login_Popup";

export default function Dashboard(){
    const url=useSelector((state)=>state.url)
  useEffect(()=>{
    console.log(url+'dashboard')
    fetch(url+'dashboard',{credentials:'include'}).then((a)=>a.json()).then((b)=>console.log(b))
  },[])
    return(
        <div>
       <div className={style.main}>
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
                <Login_Popup></Login_Popup>
        </div>
        </div>
    )
}