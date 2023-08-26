import Header from "../header/header";
import Directory from "../leftcontent/directory";
import style from './womanProducts.css'
import {womanData} from "../../fakeData";
import ProductCard from "../productcard/productcard";
export default function WomanProduct(){
    return(
        <>
            <Header/>
            <div className={'container'}>
                <Directory/>
                <div className={'product_cont'}>
                    {womanData.map((item) => {
                        return <ProductCard item={item}/>
                    })}
                </div>
            </div>
        </>
    )
}