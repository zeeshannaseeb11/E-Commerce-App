import React from "react";
import { useState } from "react";
import { useAddNewProductMutation } from "../../store/services";

const UserProducts = () => {
  const [addNewPost, response] = useAddNewProductMutation();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    addNewPost(formData)
      .unwrap()
      .then(() => {
        alert(JSON.stringify(formData));
      })
      .then((error) => console.log(error));
  };
  return (
    <>
      <div className="bg-indigo-800 min-h-screen flex items-center">
        <div className="w-full">
          <h2 className="text-center text-white font-bold text-2xl uppercase mb-10">
            Enter the Details of Product
          </h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Title
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Put in your fullname."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Description
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Put in your fullname."
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Price
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter Price"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Discount
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="discount"
                  name="discount"
                  placeholder="Enter Discount to Offer"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Rating
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="rating"
                  name="rating"
                  placeholder="Enter the ratings of Product"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Stock
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Enter the number of stock"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Brand
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Name of Brand"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Category
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
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
