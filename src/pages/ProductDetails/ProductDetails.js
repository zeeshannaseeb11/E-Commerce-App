import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import Slider from "../../components/slider";
import { useGetSingleProductQuery } from "../../store/services";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);

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
      <div className="antialiased">
        <div className="flex">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div
              className="flex items-stretch flex-col md:flex-row -mx-4"
              style={{ height: "calc(100vh - 24px)" }}
            >
              <Slider images={data?.images} />
              <div className="flex px-4  flex-col justify-center">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {data?.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    {data?.brand}
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-indigo-400 mr-1 mt-1">$</span>
                      <span className="font-bold text-indigo-600 text-3xl">
                        {data?.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save {data?.discountPercentage}%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">{data?.description}</p>

                <div className="flex py-4 space-x-4">
                  <button
                    onClick={clickHandler}
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
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
