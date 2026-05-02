import React from 'react'

function ProductCard({product}) {
  return (

    <div className='Cardmain'>
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', width: '250px' }}>
      <h2 className="title">{product.title}</h2>
      <p className="price">${product.price}</p>
      {/*props.badge && <div className="badge">{props.badge}</div>*/}
      
    </div>

 </div>
    
  )
}

export default ProductCard
