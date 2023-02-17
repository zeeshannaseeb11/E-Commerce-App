import { useState, useEffect } from "react";
import DisplayList from "../DisplayItem/displayItem";
import { useNavigate } from "react-router";
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} from "../../store/services";

const Home = () => {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();
  const {
    data: newdata,
    isLoading: newIsLoading,
    error: newError,
    isSuccess: categorySuccess,
  } = useGetProductsByCategoryQuery(category);

  const isIntLoading = !category || category === "";
  if (isLoading || newIsLoading) {
    return <div>Loading...</div>;
  }

  if (error || newError) {
    return <div>{error}</div>;
  }

  const products =
    isIntLoading || !categorySuccess ? data?.products : newdata?.products;

  const changeHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              PRODUCTS LIST
            </h1>
            <div>
              <label htmlFor="category" className="font-bold text-1xl">
                Search by category
              </label>
              <select
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                name="category"
                id="category"
                onChange={changeHandler}
              >
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
                <option value="fragrances">fragrances</option>
                <option value="skincare">skincare</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home-decoration</option>
              </select>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <DisplayList data={products} />
            </div>
            <button
              className="bg-white-500 hover:bg-blue-700 text-black bg-white flex justify-center font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/products");
              }}
            >
              Load More
            </button>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
