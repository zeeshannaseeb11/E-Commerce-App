import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DisplayList from "../DisplayItem/displayItem";
function Products() {
  const url = "https://dummyjson.com/products";
  const { data, loading, error } = useFetch(url);
  const { products } = data;

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              PRODUCTS LIST
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <DisplayList data={products} />
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Products;
