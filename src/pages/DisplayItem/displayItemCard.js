import React from "react";
import "./displayItemCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart-slice";

const DisplayListCard = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const clickHandler = () => {
    dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        img: props.img,
      })
    );
  };
  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link to={`/dashboard/${props.id}`}>
            <img
              src={props.img}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
          </Link>
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {props.category}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {props.title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {props.price}$
              </p>

              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag-plus cursor-pointer"
                  viewBox="0 0 16 16"
                  onClick={clickHandler}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {items.map((item) =>
                    item.id === props.id ? item.quantity : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayListCard;
