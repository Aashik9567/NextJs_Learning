import React from 'react'
import Link from 'next/link'
const products = () => {
  const productId=Math.floor(Math.random() * 100) + 1; // Random product ID between 1 and 100
  return (
    <>
    <Link href='/'>Home</Link>
    <div className='bg-fuchsia-300 p-4'>
      <h1>products list</h1>
      <ul className='flex flex-col space-y-2'>
        <li><Link href={`/products/1`}>Products No 1</Link></li>
        <li><Link href={`/products/2`}>Products No 2</Link></li>
        <li><Link href={`/products/50`} replace>Products No 50</Link></li>
        <li><Link href={`/products/75`}>Products No 75</Link></li>
        <li><Link href={`/products/${productId}`}>Products No {productId}</Link></li>
      </ul>
    </div>
    </>
  )
}

export default products
