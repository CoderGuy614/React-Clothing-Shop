import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Lujy9JAzF8Ate9R5xFZiJT4X007sudUFX4";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      labe="Pay Now"
      name="JL Clothing"
      billingAddress
      ShippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
