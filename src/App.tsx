import Cart from './features/cart/Cart';
import Filter from './features/product/filtering/Filter';
import Header from './components/Header';
import Products from './features/product/Products';
import Sorting from './features/product/sorting/Sorting';

function App() {
  return (
    <div className="bg-neutral-50 w-full text-sm pb-10">
      <Header></Header>
      <div className="flex flex-col lg:flex-row px-2 md:px-8 xl:px-16 def:px-[103px] mt-[145px] lg:mt-[117px] max-w-[1440px] mx-auto justify-center">
        <div className="hidden lg:block w-full lg:w-1/4">
          <Sorting />
          <Filter name="Brands" searchPlaceholder="Search brand" />
          <Filter name="Tags" searchPlaceholder="Search tag" />
        </div>
        <div className="w-full lg:w-2/4 max-w-none def:max-w-[608px] mr-4">
          <Products />
        </div>
        <div className="hidden lg:block w-full lg:w-1/4 max-w-[296px]">
          <Cart />
        </div>
      </div>
      <div className="flex justify-center mt-34 text-primary">
        <span className="mr-4">©2019 Market</span>
        <span className="mr-4">•</span>
        Privacy Policy
      </div>
    </div>
  );
}

export default App;
