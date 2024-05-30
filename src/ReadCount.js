import {useState} from "react"

function ReadCount() {
    const [amount, setAmount] = useState(0)
    const clickResponseIncrease = () => {
       
        setAmount(amount + 1)
    };
    const clickResponseDecrease = () => {
        
        setAmount(0);
    };
    
    return (
        <div className="readCounter"> 
           <div className="zeroing"> <button onClick={clickResponseDecrease}>Start over</button> </div>
          <div classname="countAmount"> <h2>{amount}</h2> </div> 
        <div className="addingToCount">  <button onClick={clickResponseIncrease}>Read count</button> </div>  
        </div>
    )
}

export default ReadCount