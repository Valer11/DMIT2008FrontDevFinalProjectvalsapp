// components/buynow/BuyNowForm.jsx

function BuyNow({ children, id, price, quantity }) {
  const details = {
    id: id,
    quantity: quantity,
    price: price,
  };

  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="id" value={details.id} />
      {/* ADD THE PRICE ID TO THE HIDDEN FIELD */}
      <input type="hidden" name="price" value={details.price} />
      <button
        className="text-white font-semibold h-9 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 rounded-md px-4"
        type="submit"
        id="checkout-button"
      >
        {children}
      </button>
    </form>
  );
}

export { BuyNow };
