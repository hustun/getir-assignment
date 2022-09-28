import { useAppSelector } from '../../../app/hooks';
import TypeFilterItem from './TypeFilterItem';
import TypeFilterItemPlaceholder from './TypeFilterItemPlaceholder';

function ProductTypeFilter() {
  const productList = useAppSelector((state) => state.product.products);
  const isLoading = useAppSelector((state) => state.product.isLoading);

  const productTypes = new Set<string>();

  const getTypes = () => {
    productList.forEach((item) => {
      const { itemType } = item;
      productTypes.add(itemType);
    });
    return Array.from(productTypes);
  };

  const range = Array.from(Array(2).keys());

  return (
    <>
      {isLoading && range.map((el, i) => <TypeFilterItemPlaceholder key={i} />)}
      {getTypes().map((el, i) => {
        return <TypeFilterItem key={i} name={el} />;
      })}
    </>
  );
}

export default ProductTypeFilter;
