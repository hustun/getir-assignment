import Product from '../types/Product';
import ProductCard from './ProductCard';
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { initialize } from '../features/product/productSlice';
import { useEffect } from 'react';
import http from '../common/http';

function ProductList() {
  const productList = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

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
      {productList.slice(0, 16).map((product) => {
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
