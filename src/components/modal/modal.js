import style from './modal.css'
import EditBtn from "../buttons/editbutton";
import UpdateBtn from "../buttons/updateBtn";
import {useState} from "react";
import HomePage from "../homePage/homePage";

export default function Modal({display,item,handlerUpdate,show}){
    let [price,setPrice] = useState(item.price)
    let [name,setName] = useState(item.name)
    let [discount,setDiscount] = useState(item.discount)
    let [rating,setRating] = useState(item.rating)
    let [orders,setOrders] = useState(item.orders)
    return(
        <div className={'modal'} style={{display}}>
            <input className={'input_price'} placeholder={'Edit Price'} type={'text'} value={price} onChange={(e)=>{
                // e.target.value
                setPrice(e.target.value)
            }}/>
            <input className={'input_discount'} placeholder={'Edit Discount'} type={'text'} value={discount} onChange={(e) => {
                setDiscount(e.target.value)
            }}/>
            <input className={'input_name'} placeholder={'Edit Name'} type={'text'} value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input className={'input_rating'} placeholder={'Edit Rating'} type={'text'} value={rating} onChange={(e) => {
                setRating(e.target.value)
            }}/>
            <input className={'input_order'} placeholder={'Edit Orders'} type={'text'} value={orders} onChange={(e) => {
                setOrders(e.target.value)
            }}/>


            <div className={'cancel_box'} onClick={()=>{
                if(display ==='none'){
                    show('block')
                } else if(display === 'block'){
                    show('none')
                }
            }}></div>
            <UpdateBtn item={item}  price={price} discount={discount} name={name} rating={rating} orders={orders} handlerUpdate={handlerUpdate} display={display} show={show}/>

        </div>
    )
}