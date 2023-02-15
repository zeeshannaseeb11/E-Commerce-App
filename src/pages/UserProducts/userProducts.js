import React from "react";
import { useState } from "react";

const UserProducts = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div class="bg-indigo-800 min-h-screen flex items-center">
        <div class="w-full">
          <h2 class="text-center text-white font-bold text-2xl uppercase mb-10">
            Enter the Details of Product
          </h2>
          <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={submitHandler}>
              <div class="mb-5">
                <label for="name" class="block mb-2 font-bold text-gray-600">
                  Title
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Put in your fullname."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Description
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Put in your fullname."
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Price
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter Price"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Discount
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="discount"
                  name="discount"
                  placeholder="Enter Discount to Offer"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Rating
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="rating"
                  name="rating"
                  placeholder="Enter the ratings of Product"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Stock
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Enter the number of stock"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Brand
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Name of Brand"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Category
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProducts;
