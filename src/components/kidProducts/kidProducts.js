import Header from "../header/header";
import Directory from "../leftcontent/directory";
import style from './kidProducts.css'
import {kidData, kidDataData} from "../../fakeData";
import ProductCard from "../productcard/productcard";
export default function KidProduct(){
    return(
        <>
            <Header/>
            <div className={'container'}>
                <Directory/>
                <div className={'product_cont'}>
                    {kidData.map((item) => {
                        return <ProductCard item={item}/>
                    })}
                </div>
            </div>
        </>
    )
}