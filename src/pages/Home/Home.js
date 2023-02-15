import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DisplayList from "../DisplayItem/displayItem";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Home = () => {
  const [url, setUrl] = useState("https://dummyjson.com/products?limit=8");
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(url);
  const { products } = data;

  const changeHandler = (event) => {
    console.log(event.target.value);
    setUrl(`https://dummyjson.com/products/category/${event.target.value}`);
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
              <label for="category" className="font-bold text-1xl">
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
            {loading && toast.pending}
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
