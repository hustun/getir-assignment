import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addBrandFilter,
  removeBrandFilter,
  addTagFilter,
  removeTagFilter,
} from '../features/product/productSlice';

type FilterItemProps = {
  name: string;
  freq: number | undefined;
  type: string;
};

function FilterItem({ name, freq, type }: FilterItemProps) {
  const dispatch = useAppDispatch();
  const tagFilters = useAppSelector((state) => state.product.tagFilters);
  const brandFilters = useAppSelector((state) => state.product.brandFilters);

  const checked = () => {
    return type === 'Brands'
      ? brandFilters.includes(name)
      : tagFilters.includes(name);
  };

  const handleChecked = () => {
    switch (type) {
      case 'Brands':
        if (checked()) {
          dispatch(removeBrandFilter(name));
        } else {
          dispatch(addBrandFilter(name));
        }
        break;

      case 'Tags':
        if (checked()) {
          dispatch(removeTagFilter(name));
        } else {
          dispatch(addTagFilter(name));
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex mb-5">
      <input
        className="rounded-sm w-5 h-5 mr-3 shadow-filter-item border-none cursor-pointer"
        type="checkbox"
        checked={checked()}
        onChange={handleChecked}
      ></input>
      <span>
        {name} <span className="text-c-black-300 ml-1">({freq})</span>
      </span>
    </div>
  );
}

export default FilterItem;
