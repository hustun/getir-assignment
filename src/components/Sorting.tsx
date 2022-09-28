import SortingItem, { SortingItemProps } from './SortingItem';
import SortingType from '../common/SortingType';

function Sorting() {
  const sortingCategories: Array<SortingItemProps> = [
    { label: 'Price low to high', type: SortingType.P_ASC },
    { label: 'Price high to low', type: SortingType.P_DESC },
    { label: 'New to old', type: SortingType.D_DESC },
    { label: 'Old to new', type: SortingType.D_ASC },
  ];
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-c-gray-500 mb-3">Sorting</h2>
      <div className="w-[286px] bg-white text-c-black-600 text-sm rounded-sm p-6 shadow-filter-container">
        {sortingCategories.map((el: SortingItemProps, i: number) => {
          return <SortingItem key={i} label={el.label} type={el.type} />;
        })}
      </div>
    </div>
  );
}

export default Sorting;
