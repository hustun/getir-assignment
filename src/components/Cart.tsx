import { useAppSelector } from '../app/hooks';
import CartItem from './CartItem';

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="border-8 border-primary p-4 rounded-sm w-full">
      <ul>
        {cart.length === 0 && <div>Your cart is empty.</div>}
        {cart.map((cartItem) => {
          return <CartItem product={cartItem.product} count={cartItem.count} />;
        })}
      </ul>
      <div className="w-fit border-primary border-2 font-semibold text-primary px-6 py-[17px] ml-auto mt-4 rounded-sm">
        <span className="font-turkish-lira">₺</span> {totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
