import Link from "next/link";
import wonders from "./wonder";
import Image from "next/image";
 
export default function PhotoFeed() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Photo Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wonders.map((wonder) => (
          <Link
            key={wonder.id}
            href={`/photo-feed/${wonder.id}`}
            className="group relative block"
          >
            <Image
              src={wonder.src}
              alt={wonder.name}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-semibold">{wonder.name}</h2>
              <p className="text-sm">{wonder.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}