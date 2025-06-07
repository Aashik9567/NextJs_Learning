"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";


export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error;
  reset:()=>void;
  // reset is a function that can be called to reset the error boundary state
}) {
    const router = useRouter();
    const reload =()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        }
        );
    }
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
        <p className="mt-4 text-lg text-red-500">{error.message}</p>
        <button onClick={()=>reload}>try again</button>
      </div>
    </div>
  );
}