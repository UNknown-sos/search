import Header from "../header/header";
import Directory from "../leftcontent/directory";
import style from'./homePage.css'
import ProductCard from "../productcard/productcard";
import {manData} from "../../fakeData";
import {womanData} from "../../fakeData";
import {kidData} from "../../fakeData";
import Modal from "../modal/modal";
import UpdateBtn from "../buttons/updateBtn";
import MansProduct from "../manProductPage/mansProduct";
import {useState} from "react";

export default function HomePage({name}){
    const [search,setSearch] = useState('')
    const [filteredList,setFilteredList] = useState(manData)
    
    const handlerEdit = (item,show,ishow) =>{
        if(ishow ==='none'){
            show('block')
        } else if(ishow === 'block'){
            show('none')
        }
    }

    const handlerSearch = () =>{
       const x= filteredList.filter((item,index)=>{
            if(item.name.includes(search)){
               return item
            }
        });
        setFilteredList(x)
    }

    const handlerUpdate = (item,price,discount,name,rating,orders,display,show) => {
        item.price = price
        item.discount = discount
        item.name = name
        item.rating = rating
        item.orders = orders
        console.log(item)
        if (display === 'none') {
            show('block')   
        } else if (display === 'block') {
            show('none')
        }
    }

    const [objects, setObjects] = useState(manData);
    const deleteObject = (objectId) => {
        const updatedObjects = objects.filter((obj) => obj.id !== objectId);
        console.log(updatedObjects)
        console.log(objectId)
        setObjects(updatedObjects);
    };
    return(
        <>
        <Header search={search} setSearch={setSearch} handlerSearch={handlerSearch}/>
            <div className={'container'}>
                <Directory/>
                <div className={'product_cont'}>
                    {filteredList.map((item) => {
                    return <ProductCard handlerEdit={handlerEdit} item={item} handlerUpdate={handlerUpdate} deleteObject={deleteObject}/>
                })}
                    {womanData.map((item) => {
                        return <ProductCard item={item} handlerEdit={handlerEdit} handlerUpdate={handlerUpdate}/>
                    })}
                    {kidData.map((item) => {
                        return <ProductCard item={item} handlerEdit={handlerEdit} handlerUpdate={handlerUpdate}/>
                    })}
                    {/* {filteredList.filter((item,index)=>{
                        if(item.name.includes(search)){
                            console.log(item.name);
                        }
                    })} */}
                </div>
            </div>
        </>

    )
}