import './ItemsList.css';
import React from 'react';
import FlipMove from 'react-flip-move';
import trashIcon from './trashicon.png';
const ItemsList = props =>{
    console.log(props.itemList) ;
    var updateKey='';
    if(props.updateItem){
       updateKey= props.updateItem.key;
       
    }
    const items = props.itemList.map((item)=>{
       return( <div key={item.value} className="list">
           <p><input type="text" 
           value={item.value} 
           onChange={(e) =>props.onUpdate(e,item.key)} autoFocus={updateKey===item.key? true :false} />
           
           <img onClick={()=> props.deleteItem(item.value)} src={trashIcon} alt="delete" /></p> 
            
        </div>
       )
    });
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out" > 
                {items}
            </FlipMove></div>
    )
}

export default ItemsList;