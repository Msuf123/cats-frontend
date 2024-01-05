import style from './filter.module.css'
export default function Filter(){
    return(
        <div className={style.main}>
            <div>
            <input placeholder="Seach By name"></input>
            <button>&#128269;</button>
            </div>
            <input type="range"></input>
            <h5>Age</h5>
            <input type="checkbox"></input>
            <h5>Color</h5>
            <input type="checkbox"></input>
        </div>
    )
}