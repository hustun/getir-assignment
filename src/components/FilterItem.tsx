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
    <div className="flex mb-[18px]">
      <div className="relative mr-3 w-[22px] h-[22px]">
        <input
          className={`rounded-sm w-full h-full shadow-filter-item border-none cursor-pointer appearance-none ${
            checked() ? 'bg-primary' : ''
          }`}
          type="checkbox"
          checked={checked()}
          onChange={handleChecked}
        ></input>
        {checked() && (
          <img
            className="absolute left-0 top-0 m-auto inset-0 w-[13px] h-[9px]"
            src="./checkmark-white.svg"
            alt=""
          />
        )}
      </div>

      <span className="max-w-[140px]">
        {name} <span className="text-c-black-300 ml-1">({freq})</span>
      </span>
    </div>
  );
}

export default FilterItem;
