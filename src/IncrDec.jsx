import react, { useState } from 'react';

const IncrDec = () => {
const incNum = () =>{
    setNum(num+1);
}

const decNum = () => {
    if(num > 0){
        setNum(num-1);
    }else{
        alert("Sorry Zero limit Reached");
        setNum(0);
    }
}

    const [num, setNum] = useState(0);
    return(
        <>
        <div className='main-div'>
            <div className='center_div'>
                <h1> {num} </h1>
                <div className='btn_div' >
                    <button onClick={incNum}> Increment </button>
                    <button onClick={decNum}> Decrement </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default IncrDec;