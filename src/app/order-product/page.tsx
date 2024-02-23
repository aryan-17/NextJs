"use client"

import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () =>{
        console.log("Placing your Order");
        router.push("/");
    }
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-10">
      <h1 className="text-2xl font-semibold">Order Product</h1>
      <button onClick={handleClick} className="bg-blue-200 rounded-md p-2 transition ease-in-out hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 duration-300">Place order</button>
    </div>
  );
}
