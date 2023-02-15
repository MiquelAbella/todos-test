import { ProductItem } from "./ProductItem";

import "./products.css";
import { products } from "../../data/products";

export const ProductsList = () => {
  return (
    <div className="products-list">
      {products.map((product, idx) => {
        return <ProductItem key={`t-shirt-item-${idx}`} item={product} />;
      })}
    </div>
  );
};
