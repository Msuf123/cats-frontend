import { useSelector } from "react-redux"
import style from './allFeatures.module.css'
import src from '../../../Img/1681038325chatgpt-logo-transparent.webp'
import src_t from '../../../Img/location_icon.png'
import src_th from '../../../Img/globe.png'
import { useNavigate } from "react-router-dom"
export default function AllFeatures(){
    const auth=useSelector((state)=>state.authicated)
     const nav=useNavigate()
    return(
        <div className={style.main}>
        <div className={style.shallow} style={auth?{display:'none'}:{}}>
            <button onClick={()=>{
              nav('/login')
            }}>Login</button>
        </div>
         <button>Nearby Me<img src={src_t}></img></button>
         <button>Find Cats with AI<img src={src}></img></button>
         
        </div>
    )
}