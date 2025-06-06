
export default function productLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <header className='bg-blue-500 text-white p-4'>
          <h1 className='text-center text-2xl'>Header</h1>
       </header>
       <div className='mx-auto p-4'>

        {children}
       </div>
        <footer className='bg-gray-800 text-white p-4 mt-4'>
          <p className='text-center'>Footer</p>
        </footer>
   </>
 
  )
}
