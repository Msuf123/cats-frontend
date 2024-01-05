import src from '../../../Img/pexels-pixabay-208984.jpg'
import style from './cats.module.css'
export default function Cats({name,age,price}){
    return(
        <div className={style.main}>
            <img src={src}></img>
            <div className={style.details}>
            <span className={style.name}>{name}</span>
            <div className={style.conjusted}>
                <span>Age:{age}</span>
                <span>Distance:{price}</span>
            </div>
            <button>Know More!</button>
            </div>
        </div>
    )
}