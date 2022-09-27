import { useAppDispatch } from '../app/hooks';
import { addProduct } from '../features/cart/cartSlice';
import Product from '../types/Product';

type ProductProps = {
  product: Product;
  isLoading: boolean;
};

function ProductCard({ product, isLoading }: ProductProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col h-[225px]">
          <div className="p-4 border-[1.17666px] border-[#F3F0FE] rounded-xl">
            <img
              className="max-w-none h-[92px] mx-auto"
              width={92}
              height={92}
              src={product.itemType === 'shirt' ? '/shirt.png' : '/mug.png'}
              alt="Product"
            />
          </div>

          <span className="font-bold text-primary mt-2">
            <span className="font-turkish-lira font-medium">₺ </span>
            {product.price}
          </span>
          <h2 className="font-semibold">{product.name}</h2>
          <button
            className="w-full bg-primary hover:opacity-80 text-white font-bold py-[1px] px-4 rounded mt-auto text-xs leading-5"
            onClick={handleAddProduct}
          >
            Add
          </button>
        </div>
      )}
    </>
  );
}

export default ProductCard;
