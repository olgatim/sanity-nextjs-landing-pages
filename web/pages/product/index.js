import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      Products page is here
      <Link href="/product/2">
        <a>Go to product2</a>
      </Link>
    </div>
  );
};

export default Products;
