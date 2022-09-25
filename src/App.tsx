import Cart from './components/Cart';
import Filter from './components/Filter';
import Header from './components/Header';
import Products from './components/Products';
import Sorting from './components/Sorting';

function App() {
  const brandFilterList: Array<string> = [
    'All',
    'Konopelski Group',
    'Rice Inc',
    'Has Comp',
  ];

  const tagFilterList: Array<string> = [
    'All',
    'Beach',
    'People',
    'Some other tag',
  ];
  return (
    <div className="bg-neutral-50 w-full text-sm">
      <Header></Header>
      <div className="flex px-[103px] mt-10 max-w-[1440px] mx-auto">
        <div className="w-1/4">
          <Sorting />
          <Filter name="Brands" filterList={brandFilterList} />
          <Filter name="Tags" filterList={tagFilterList} />
        </div>
        <div className="w-2/4">
          <Products />
        </div>
        <div className="w-1/4">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
