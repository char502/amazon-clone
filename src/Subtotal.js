import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const numberOfItems = basket.length;

  const subTotal = basket
    .map((item) => item.price)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);

  console.log(subTotal);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of homework */}
              SubTotal ({numberOfItems}{" "}
              {numberOfItems > 1 || numberOfItems === 0 ? "items" : "item"}):{" "}
              <strong>${`${subTotal}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} // to 2 decimal places
        value={0} //part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
