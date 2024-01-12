import src from '../../../Img/pexels-pixabay-208984.jpg'
import style from './cats.module.css'
export default function Cats({name,age,price}){
    return(
        <div className={style.main}>
            <img src='https://lh3.googleusercontent.com/drive-viewer/AEYmBYQNSjRFP71WnHf6tjBMMN_liYF3ZxNmgz_F1DbeiBU710Nk9FF8E3UkBnrNcN7J-B-o52NxC2cYXmqkisLXQRAbKRJzcg=s1600'></img>
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