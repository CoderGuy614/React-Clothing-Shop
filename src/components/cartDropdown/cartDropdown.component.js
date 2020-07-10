import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
