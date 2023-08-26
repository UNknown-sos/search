import style from './buttons.css'
import {manData} from "../../fakeData";
import ProductCard from "../productcard/productcard";

export default function UpdateBtn({item,price,name,rating,discount,orders,handlerUpdate,display,show}){
    return(
        <button className={'updateBtn'} onClick={() => {
            handlerUpdate(item,price,discount,name,rating,orders,display,show)
        }}>Update</button>
    )
}