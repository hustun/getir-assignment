import { useAppSelector } from '../../../app/hooks';
import TypeFilterItem from './TypeFilterItem';

function ProductTypeFilter() {
  const productList = useAppSelector((state) => state.product.products);

  const productTypes = new Set<string>();

  const getTypes = () => {
    productList.forEach((item) => {
      const { itemType } = item;
      productTypes.add(itemType);
    });
    return Array.from(productTypes);
  };

  return (
    <>
      {getTypes().map((el, i) => {
        return <TypeFilterItem key={i} name={el} />;
      })}
    </>
  );
}

export default ProductTypeFilter;
