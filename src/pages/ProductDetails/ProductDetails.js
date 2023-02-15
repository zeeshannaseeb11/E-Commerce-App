import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import Slider from "../../components/slider";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const { data, loading, error } = useFetch(url);

  const clickHandler = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        img: data.thumbnail,
      })
    );
  };

  return (
    <div className="bg-white">
      <div class="antialiased">
        <div class="flex">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div
              class="flex items-stretch flex-col md:flex-row -mx-4"
              style={{ height: "calc(100vh - 24px)" }}
            >
              <Slider images={data.images} />
              <div class="flex px-4  flex-col justify-center">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {data.title}
                </h2>
                <p class="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" class="text-indigo-600 hover:underline">
                    {data.brand}
                  </a>
                </p>

                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-indigo-400 mr-1 mt-1">$</span>
                      <span class="font-bold text-indigo-600 text-3xl">
                        {data.price}
                      </span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">
                      Save {data.discountPercentage}%
                    </p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div>
                </div>

                <p class="text-gray-500">{data.description}</p>

                <div class="flex py-4 space-x-4">
                  <button
                    onClick={clickHandler}
                    type="button"
                    class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
