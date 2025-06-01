import React from 'react'

const productDetails = async ({params}:{
    params: Promise<{productId: string}>
}) => {
    const productId = (await params).productId;
  return (
    <div>
      <h1>detail about Product No</h1>
        <p>Product ID: {productId}</p>
    </div>
  )
}

export default productDetails
