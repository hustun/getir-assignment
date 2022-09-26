import Product from '../types/Product';
import ProductCard from './ProductCard';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { initialize, sort } from '../features/product/productSlice';
import { useEffect, useState } from 'react';
import http from '../common/http';
import ProductCardPlaceholder from './ProductCardPlaceholder';
import SortingType from '../common/SortingType';

function ProductList() {
  const dispatch = useAppDispatch();
  const filteredProductList = useAppSelector(
    (state) => state.product.filteredProducts
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    http
      .get<Array<Product>>('/items')
      .then((res) => {
        dispatch(initialize(res.data));
        dispatch(sort(SortingType.P_ASC));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const range = Array.from(Array(16).keys());

  return (
    <div className="bg-white grid grid-cols-4 gap-x-6 gap-y-5 p-5">
      {isLoading && range.map((el, i) => <ProductCardPlaceholder key={i} />)}
      {filteredProductList.slice().map((product) => {
        return (
          <ProductCard
            key={product.added}
            product={product}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
