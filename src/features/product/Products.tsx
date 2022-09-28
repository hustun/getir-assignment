import { useState } from 'react';
import Filter from './filtering/Filter';
import Pagination from './Pagination';
import ProductTypeFilter from './filtering/ProductTypeFilter';
import Sorting from './sorting/Sorting';

function Products() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterToggle = () => {
    setShowMobileFilters((prevState) => !prevState);
  };

  return (
    <div className="mr-4 w-full">
      <h1 className="mb-4 text-xl text-c-black-500">Products</h1>
      <div className="hidden lg:flex mb-4">
        <ProductTypeFilter />
      </div>
      <button
        className="block lg:hidden py-[6px] px-4 bg-[#F2F0FD] text-primary font-semibold cursor-pointer w-fit mb-4"
        onClick={handleFilterToggle}
      >
        Filter
      </button>
      {showMobileFilters && (
        <div className="flex flex-wrap lg:hidden justify-between">
          <Sorting />
          <Filter name="Brands" />
          <Filter name="Tags" />
        </div>
      )}

      <Pagination itemsPerPage={16}></Pagination>
    </div>
  );
}

export default Products;
