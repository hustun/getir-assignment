import SortingItem, { SortingItemProps } from './SortingItem';
import SortingType from '../../../common/SortingType';
import Container from '../../../components/ui/Container';

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
      <Container className="p-6">
        {sortingCategories.map((el: SortingItemProps, i: number) => {
          return <SortingItem key={i} label={el.label} type={el.type} />;
        })}
      </Container>
    </div>
  );
}

export default Sorting;
