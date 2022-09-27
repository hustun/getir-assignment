import { useAppDispatch } from '../app/hooks';
import { addProduct, removeProduct } from '../features/cart/cartSlice';
import Product from '../types/Product';

type CartItemProps = {
  product: Product;
  count: number;
};

function CartItem({ product, count }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleIncreaseCount = () => {
    dispatch(addProduct(product));
  };

  const handleDecreaseCount = () => {
    dispatch(removeProduct(product));
  };

  return (
    <li key={product.added} className="flex border-b py-4">
      <div className="flex flex-col">
        <h2>{product.name}</h2>
        <span className="text-primary font-semibold">₺{product.price}</span>
      </div>
      <div className="flex ml-auto">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={handleDecreaseCount}
        >
          <img
            className="w-[10px]"
            src="./minus.svg"
            alt="Decrease item count"
            width={10}
            height={10}
          />
        </button>

        <div className=" bg-primary text-white font-bold text-[15px] leading-5 w-8 h-8 flex items-center justify-center">
          {count}
        </div>
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={handleIncreaseCount}
        >
          <img
            className="w-[10px]"
            src="./plus.svg"
            alt="Increase item count"
            width={10}
            height={10}
          />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
