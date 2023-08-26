import style from './productcard.css'
import  {useState} from "react";
import ProductImg from "./productImg";
import ProductPrice from "./productPrice";
import ProductDiscount from "./productDiscount";
import ProductName from "./productName";
import ProductRating from "./productRating";
import ProductOrders from "./productOrders";
import DeleteBtn from "../buttons/deletebutton";
import EditBtn from "../buttons/editbutton";
import Modal from "../modal/modal";
export default function ProductCard({item,handlerEdit,handlerUpdate,deleteObject}){
    const [ishow,setiShow] = useState('none')
    return(
        <div className={'product_card'}>
            <div className={'img_box'}>
                <ProductImg img = {item.img}/>
            </div>
            <div className={'price_cont'}>
                <div className={'price_box'}>
                    <ProductPrice price={item.price}/>
                </div>
                <div className={'discount_box'}>
                    <ProductDiscount discount={item.discount}/>
                </div>
            </div>
            <div className={'name_box'}>
                <ProductName name={item.name}/>
            </div>
            <div className={'info_cont'}>
                <div className={'rating_box'}>
                    <img src={'/images/star.png'}/>
                    <ProductRating rating={item.rating}/>
                </div>
                <div className={'orders_box'}>
                    <ProductOrders orders={item.orders}/>
                    <p>orders</p>
                </div>
            </div>
            <div className={"buttons_cont"}>
                <div className={'edit_btn_box'}>
                    <EditBtn handlerEdit={handlerEdit} item={item}  show={setiShow} ishow={ishow}/>
                </div>
                <div className={'delete_btn_box'}>
                    {/*<DeleteBtn deleteObject={deleteObject} item={item}/>*/}
                    <button className={'delete_btn'} onClick={() => {deleteObject(item.id)}}>Delete</button>
                </div>
            </div>
            <Modal display={ishow} item={item} handlerUpdate={handlerUpdate} show={setiShow}/>
        </div>
    )
}