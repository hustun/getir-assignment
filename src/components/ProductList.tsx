import Product from '../types/Product';
import ProductCard from './ProductCard';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { initialize, addTagFilter } from '../features/product/productSlice';
import { useEffect } from 'react';
import http from '../common/http';

function ProductList() {
  const dispatch = useAppDispatch();
  const filteredProductList = useAppSelector(
    (state) => state.product.filteredProducts
  );

  useEffect(() => {
    http
      .get<Array<Product>>('/items')
      .then((res) => {
        dispatch(initialize(res.data));
      })
      .catch();
  }, []);

  return (
    <div className="bg-white grid grid-cols-4 gap-x-6 gap-y-5 p-5">
      {filteredProductList.slice().map((product) => {
        return (
          <ProductCard
            key={product.added}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
