import React from 'react'


const Product = (elshen) => {
    return (
        <div className='a1'>
           <p>id={elshen.Id}</p> 
           <p style={elshen.countity<1000?{backgroundColor:"red"}:null}>
            countity={elshen.countity}</p> 
           <p>name={elshen.name}</p>
           <p>prise={elshen.prise}</p>
            </div>
    )
}
export default Product