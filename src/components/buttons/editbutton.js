import style from './buttons.css'

export default  function EditBtn({show,ishow,item,handlerEdit}){
    return(
        <button className={'edit_btn'} onClick={() => handlerEdit(item, show, ishow) }>Edit</button>
    )
}