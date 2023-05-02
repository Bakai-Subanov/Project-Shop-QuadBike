import React from "react";
import "./cartPage.css";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const { totalPrice, products } = useSelector((state) => state.cart);

  function handleRemoveFromCart(id, price) {
    dispatch(
      removeFromCart({
        id: id,
        price: price,
      })
    );
  }

  return (
    <div className="container_a">
      <div>
        {products.map((item) => {
          return (
            <div className="block1">
              <img className="product-image" src={item.image} alt="" />
              <h3 className=" max-w-xs">{item.title}</h3>
              <h4>{item.price}</h4>
              <div
                onClick={()=>handleRemoveFromCart(item.id, item.price)}
                className=" p-2 bg-red-700 rounded-lg text-white cursor-pointer"
              >
                Удалить
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <div className=" text-center">
          <h5>Общая сумма:</h5>
          <h2>{totalPrice}</h2>
        </div>
        <button className="buy block ml-auto">купить</button>
      </div>
    </div>
  );
}