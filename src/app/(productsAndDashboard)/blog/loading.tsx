export default function loadingElement() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
      <p className="ml-4 text-gray-700">Loading...</p>
    </div>
  );
}
// This loading element can be used in your Next.js application to indicate that content is being loaded.