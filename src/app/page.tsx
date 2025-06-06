import Link from "next/link"
export default function Home() {
  return (
    <div className="flex flex-col bg-amber-200">
      <nav className="m-8 items-center justify-center flex gap-5">
        <ul className="flex space-x-4">
          <li><Link  href="/">Home</Link></li>
          <li><Link  href="/about">About</Link></li>
          <li><Link  href="/counter">Counter</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
       </nav>
      <div className="mt-8 space-x-4 flex flex-row items-center justify-center border-4 border-gray-600 p-4 rounded-lg">
      <Link href='/articles/breaking-news-123?lang=en' className="m-2 font-bold">Read in English</Link>
      <Link href='/articles/actualite-francaise-123?lang=fr' className="m-2 font-bold">Lire en français</Link>
      <Link href='/articles/noticia-espanola-123?lang=es' className="m-2 font-bold">Leer en español</Link>
      </div>
       <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js Practice Code</h1>
      <p className="text-lg mb-2">Welcome to the Next.js practice code repository!</p>
      <p className="text-sm text-gray-600">Explore the features and learn more about Next.js.</p>
      </main>
    </div>

  )
}

