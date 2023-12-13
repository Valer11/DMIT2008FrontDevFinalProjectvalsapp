function BuyNow({ priceId }) {
  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="id" value="from_dashboard" />
      {/* Use the priceId from props */}
      <input type="hidden" name="price" value={priceId} />
      <button
        type="submit"
        className="w-2/5 text-xl font-bold rounded-md bg-blue-500 hover:bg-blue-700 text-white py-2.5"
      >
        Buy Now
      </button>
    </form>
  );
}

export { BuyNow };
