
export default function authLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <body>
       <div className='mx-auto p-4'>

        {children}
       </div>
        <footer className='bg-gray-800 text-white p-4 mt-4'>
          <p className='text-center'>Footer</p>
        </footer>
      </body>

  )
}
