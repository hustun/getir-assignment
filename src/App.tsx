import Cart from './components/Cart';
import Filter from './components/Filter';
import Header from './components/Header';
import Products from './components/Products';
import Sorting from './components/Sorting';

function App() {
  return (
    <div className="bg-neutral-50 w-full text-sm pb-10">
      <Header></Header>
      <div className="flex px-[103px] mt-10 max-w-[1440px] mx-auto">
        <div className="w-1/4">
          <Sorting />
          <Filter name="Brands" />
          <Filter name="Tags" />
        </div>
        <div className="w-2/4 max-w-[608px] mr-4">
          <Products />
        </div>
        <div className="w-1/4 max-w-[296px]">
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
