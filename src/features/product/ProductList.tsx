import Product from '../../types/Product';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { initialize, setSortingType, setIsLoading } from './productSlice';
import { useEffect } from 'react';
import ProductCardPlaceholder from './ProductCardPlaceholder';
import SortingType from '../../common/SortingType';
import http from '../../common/http';

type ProductListProps = {
  currentItems: Array<Product>;
};

function ProductList({ currentItems }: ProductListProps) {
  const isLoading = useAppSelector((state) => state.product.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    http
      .get<Array<Product>>('/items')
      .then((res) => {
        dispatch(initialize(res.data));
        dispatch(setSortingType(SortingType.P_ASC));
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const range = Array.from(Array(16).keys());

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5 p-5 shadow-product-list">
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
