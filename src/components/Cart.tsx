import { useAppSelector } from '../app/hooks';

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="border-8 border-primary p-4 rounded-sm w-full">
      <ul>
        {cart.length === 0 && <div>Your cart is empty.</div>}
        {cart.map((cartItem) => {
          return (
            <li key={cartItem.product.added} className="flex border-b py-4">
              <div className="flex flex-col">
                <h2>{cartItem.product.name}</h2>
                <span className="text-primary font-semibold">
                  ₺{cartItem.product.price}
                </span>
              </div>
              <div className="ml-auto bg-primary text-white font-bold text-[15px] leading-5 w-8 h-8 flex items-center justify-center">
                {cartItem.count}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-fit border-primary border-2 font-semibold text-primary px-6 py-[17px] ml-auto mt-4 rounded-sm">
        <span className="font-turkish-lira">₺</span> {totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
