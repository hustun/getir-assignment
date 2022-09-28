import Pagination from './Pagination';
import ProductTypeFilter from './filtering/ProductTypeFilter';

function Products() {
  return (
    <div className="mr-4 w-full">
      <h1 className="mb-4 text-xl text-c-black-500">Products</h1>
      <div className="hidden lg:flex mb-4">
        <ProductTypeFilter />
      </div>

      <Pagination itemsPerPage={16}></Pagination>
    </div>
  );
}

export default Products;
