import React from 'react'

const page = async({params}:
    {
        params:Promise<{productId: string, reviewId: string}>
    }
) => {
    const {productId, reviewId} = await params;
  return (
    <div>
      <h1>Review no {reviewId} for {productId}</h1>
    </div>
  )
}

export default page
