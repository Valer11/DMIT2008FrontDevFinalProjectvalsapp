function BuyNow({ children , id , price , quanity }) {
    const details = {
      id: id,
      quanity: quanity,
      price: price,
    };
  console.log(details.id)
    return (
      <form
        action="/api/checkout"
        method="POST"
      >
        <input
          type="hidden"
          name="id"
          value = {details.id}
        />
        {/* ADD THE PRICE ID TO THE HIDDEN FIELD */}
        <input
          type="hidden"
          name="price"
          value={details.price}
        />
        <button className='text-white font-semibold h-9'
          type="submit"
          id="checkout-button"
        >
          Buy Now
        </button>
      </form>
    );
  }
  
  export { BuyNow };