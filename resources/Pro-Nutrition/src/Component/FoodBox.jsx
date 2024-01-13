import React, { useState } from "react";
import './FoodBox.css'
function FoodBox(props){
    let{ele, index} = props;
    let {img, name, cal} = ele;

    const [input, setInput] = useState(0);
    const [quantity, setQuantity] = useState(0)

    function quantityHandler(){
        setQuantity(input)
    }
    return (
        <>
            <div id="item-container">
                <div id="item-subcontainer">
                    <img src={img} alt="itempic" id="item-img"/>
                    <div id="name-cal">
                        <span id="Name">{name}</span>
                        <span id="cal">{cal}</span>
                    </div>
                    <div>
                        <input type="number" 
                        onChange={(e)=>{setInput(e.target.value)}}
                        value={input}
                        id="calInput"
                        />
                        <button onClick={quantityHandler} id="calButt">+</button>
                    </div>
                </div>
                <p>{quantity} {name} = {cal*quantity} calories</p>
                <button onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>reset</button>
            </div>
        
        </>
    )
}

export default FoodBox;