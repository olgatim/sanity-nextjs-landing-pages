import React from "react";
import Router from "next/router";
import Link from "next/link";

const Product = () => {
  console.log(Router.router);
  return (
    <div>
      Product page is here
      <Link href="/product/2/a">
        <a>Go to product2 category a</a>
      </Link>
    </div>
  );
};

export default Product;
