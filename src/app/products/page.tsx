import React from "react";
import Link from "next/link";
const page = () => {
  const productId = 100;
  return (
    <div className="text-2xl font-medium">
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <h2>Product 4</h2>
      <Link href={`products/${productId}`} replace>Product {productId}</Link>
    </div>
  );
};

export default page;
