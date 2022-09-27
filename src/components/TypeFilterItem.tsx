import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setTagFilter } from '../features/product/productSlice';

type TypeFilterItemProps = {
  name: string;
};

function TypeFilterItem({ name }: TypeFilterItemProps) {
  const dispatch = useAppDispatch();
  const typeFilter = useAppSelector((state) => state.product.typeFilter);

  const selected = () => {
    return name === typeFilter;
  };

  const handleFilter = () => {
    if (selected()) {
      dispatch(setTagFilter(''));
    } else {
      dispatch(setTagFilter(name));
    }
  };

  return (
    <button
      className={`py-[6px] px-4 mr-4 rounded-sm  text-primary font-semibold    cursor-pointer transition-colors ${
        selected()
          ? 'bg-primary text-[#F2F0FD]'
          : 'bg-[#F2F0FD] hover:bg-primary hover:text-[#F2F0FD] hover:opacity-75'
      }`}
      onClick={handleFilter}
    >
      {name}
    </button>
  );
}

export default TypeFilterItem;