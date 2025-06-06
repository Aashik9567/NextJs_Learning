"use client";
import { useRouter } from "next/navigation";
export default function PlaceOrder() {

    const router = useRouter();
  const handleOrderClick=()=>{
    alert("Order placed successfully!");
    // Here you can add logic to handle the order placement, like API calls or state updates.
    router.push('/'); // Redirect to home page after placing the order
    //router.replace('/'); // Use replace if you don't want to keep the place order page in history
   }
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Place Order Page</h1>
      <p className="text-lg mb-2">This is the place order page.</p>
      <p className="text-sm text-gray-600">You can place your orders here.</p>
      <button onClick={handleOrderClick} className="mt-5 p-3 border-4 rounded-2xl hover:cursor-pointer">Place order</button>
    </div>
  );
}