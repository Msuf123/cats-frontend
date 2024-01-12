import style from "./loading.module.css"
export default function Loading(){
    return(
        <div className={style.main}>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <div className={style.sticks}></div>
            <span className={style.typing}>Loading...</span>
        </div>
    )
}