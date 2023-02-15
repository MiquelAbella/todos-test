import { Button } from "../index";
import "./products.css";

export const ProductItem = ({ item }) => {
  const { url, name, price } = item;
  return (
    <div>
      <img src={url} alt="" />
      <div className="product-info-container">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <Button text="Buy me!" value={name} size="sm" color="secondary" />
    </div>
  );
};
