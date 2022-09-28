import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../../app/hooks';
import Product from '../../types/Product';
import ProductList from './ProductList';
import './Pagination.css';

type PaginationProps = {
  itemsPerPage: number;
};

function Pagination({ itemsPerPage }: PaginationProps) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<Array<Product>>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const filteredProducts = useAppSelector(
    (state) => state.product.filteredProducts
  );

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [filteredProducts, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item prev"
        previousLinkClassName="page-link"
        nextClassName="page-item next"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        // renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
