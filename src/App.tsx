import Filter from './components/Filter';
import Header from './components/Header';
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
    <div className="bg-neutral-50 w-full">
      <Header></Header>
      <div className="flex mx-[103px] mt-10">
        <div className="w-1/4">
          <Sorting />
          <Filter name="Brands" filterList={brandFilterList} />
          <Filter name="Tags" filterList={tagFilterList} />
        </div>
        <div className="w-2/4 bg-red-300 h-screen">Div1</div>
        <div className="w-1/4 bg-red-400 h-screen">Div1</div>
      </div>
    </div>
  );
}

export default App;
