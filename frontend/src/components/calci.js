import React, { useState } from 'react';
function Claci(){
    let [output,setOutput]= useState('');
    const getNum =(num) =>{
        if(num == '='){
            setOutput(eval(output))
        }else if(num == 'C'){
            setOutput('')
        }else{
            setOutput((prevState) => prevState +)
        }
    }
}
return (
    <div>
        {
            
        }
    </div>
)