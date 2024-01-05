import { Link } from "react-router-dom";
import style from './login.module.css'
export default function Login(){
    return(
        <div className={style.main}>
            <div className={style.box}>
            <input placeholder="Enter username or email"></input>
            <input placeholder="Enter password"></input>
            <button>Login</button>
            <span>Do not have a account? <Link to={"/sign-Up"}>Sign-Up.</Link></span>
            </div>
        </div>
    )
}