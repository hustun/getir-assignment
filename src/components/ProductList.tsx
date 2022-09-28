import Product from '../types/Product';
import ProductCard from './ProductCard';
import { useAppDispatch } from '../app/hooks';
import { initialize, setSortingType } from '../features/product/productSlice';
import { useEffect, useState } from 'react';
import http from '../common/http';
import ProductCardPlaceholder from './ProductCardPlaceholder';
import SortingType from '../common/SortingType';

type ProductListProps = {
  currentItems: Array<Product>;
};

function ProductList({ currentItems }: ProductListProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    http
      .get<Array<Product>>('/items')
      .then((res) => {
        dispatch(initialize(res.data));
        dispatch(setSortingType(SortingType.P_ASC));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const range = Array.from(Array(16).keys());

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 p-5 shadow-product-list">
      {isLoading && range.map((el, i) => <ProductCardPlaceholder key={i} />)}
      {currentItems.slice().map((product) => {
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
