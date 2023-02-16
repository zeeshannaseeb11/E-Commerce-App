import React from "react";
import DisplayListCard from "./displayItemCard";
import "./displayItem.css";

const DisplayList = (props) => {
  return (
    <div className="item-box ">
      {props.data?.map((item) => {
        return (
          <DisplayListCard
            key={item.id}
            img={item.thumbnail}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default DisplayList;
