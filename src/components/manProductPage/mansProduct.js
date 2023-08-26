import Header from "../header/header";
import Directory from "../leftcontent/directory";
import style from './manProductPage.css'
import {manData} from "../../fakeData";
import ProductCard from "../productcard/productcard";
export default function MansProduct({currentPage,setCurrentPage}){
    return(
        <>
            <Header currentPage={currentPage}/>
            <div className={'container'}>
                <Directory/>
                <div className={'product_cont'}>
                    {manData.map((item) => {
                        return <ProductCard item={item}/>
                    })}
                </div>
            </div>
        </>
    )
}