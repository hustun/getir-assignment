import ProductList from './ProductList';

function Products() {
  const productTypes: Array<string> = ['mug', 'shirt'];

  return (
    <div className="mr-4 max-w-[608px]">
      <h1 className="mb-4 text-xl text-c-black-500">Products</h1>
      <div className="flex mb-4">
        {productTypes.map((el: string) => {
          return (
            <div className="py-[6px] px-4 mr-4 rounded-sm bg-[#F2F0FD] text-primary font-semibold hover:bg-primary hover:text-[#F2F0FD] cursor-pointer transition-colors">
              {el}
            </div>
          );
        })}
      </div>
      <ProductList />
    </div>
  );
}

export default Products;
