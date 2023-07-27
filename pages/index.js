import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <div>
      <h1> Home page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
