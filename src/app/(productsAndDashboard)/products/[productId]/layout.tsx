
const ProductLayout = ( {children}:
{
  children: React.ReactNode;
}
) => {
  return (
    <div>
      {children}
        <h1 className='text-3xl'>Featured Products</h1>
    </div>
  )
}

export default ProductLayout
