import Link from "next/link"
export default function Home() {
  return (
    <div className="flex flex-col bg-amber-200">
      <nav className="m-8 items-center justify-center">
        <ul className="flex space-x-4">
          <li><Link  href="/">Home</Link></li>
          <li><Link  href="/about">About</Link></li>
          <li><Link  href="/counter">Counter</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
       </nav>
       <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Next.js Practice Code</h1>
      <p className="text-lg mb-2">Welcome to the Next.js practice code repository!</p>
      <p className="text-sm text-gray-600">Explore the features and learn more about Next.js.</p>
      </main>
    </div>

  )
}

