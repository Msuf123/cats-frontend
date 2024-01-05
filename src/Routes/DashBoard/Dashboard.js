import Cats from "./Cats/Cats";
import Filter from "./Filter/Filter";
import style from './dashboard.module.css'
export default function Dashboard(){

    return(
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
            
        </div>
    )
}