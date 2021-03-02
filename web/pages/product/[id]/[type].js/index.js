import React from "react";
import Router from "next/router";
import Link from "next/link";

const Type = () => {
  console.log(Router.router);
  return (
    <div>
      Type page is here
      <Link href="/product">
        <a>Go to product2 category a</a>
      </Link>
    </div>
  );
};

export default Type;
