"use client"
import Link from "next/link";
import { use } from "react";
//page.tsx has access to params and searchParams but layout.tsx does not have access to searchParams only params
// In client components we cannot use async-await directly and for params and searchParams we need to use use(params)
export default  function NewsArticles({ params, searchParams} 
    : {
    params: Promise <{articleId: string}>;
    searchParams: Promise<{ lang?:"en" | "fr" | "es" }>; 
}) {
    const { articleId }= use (params);
    const {lang="en"} =  use (searchParams);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Articles Page</h1>
      <p className="text-lg mb-2">This is the articles page.</p>
      <p className="text-3xl text-gray-600">News article {articleId}</p>
      <p className="text-2xl text-gray-600">Reading in language {lang}</p>
      <div className="mt-8 space-x-4 flex flex-row items-center justify-center border-4 border-gray-600 p-4 rounded-lg">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>

    </div>
  );
}