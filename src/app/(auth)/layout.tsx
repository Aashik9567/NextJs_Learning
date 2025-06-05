"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function authLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const navlinks= [
    {name:'login',href:'/login'},
    {name:'register',href:'/register'},
    {name:'forgot password',href:'/forgot-password'},
  ]
  return (

      <>
        <nav className="bg-gray-700 text-white p-4 items-center justify-center flex gap-5">
          {navlinks.map((link)=>{
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/'); 
            return(
              <Link className={isActive?"font-bold mr-4 text-purple-500":"text-blue-400"} href={link.href} key={link.name}>{link.name}</Link>
            )
          })}
        </nav>
       <div className='mx-auto p-4'>
        {children}
       </div>
        <footer className='bg-gray-800 text-white p-4 mt-4'>
          <p className='text-center'>Footer</p>
        </footer>
      </>

  )
}
