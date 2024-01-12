import style from './home.module.css'
import src from '../../Img/HomeImage.jpg'
import Meow from './Meow/Meow'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const nav= useNavigate()
    return(
        <div className={style.main}>
            <h1>Cat's World</h1>
            <div className={style.grid}>
            <Meow></Meow>
            <div className={style.image}>
            <img src={src}></img>
            </div>
            
            </div>
        </div>
    )
}