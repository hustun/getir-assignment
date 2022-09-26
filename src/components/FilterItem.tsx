import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  addBrandFilter,
  removeBrandFilter,
} from '../features/product/productSlice';

type FilterItemProps = {
  name: string;
  freq: number | undefined;
};

function FilterItem({ name, freq }: FilterItemProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleChecked = () => {
    if (checked) {
      dispatch(removeBrandFilter(name));
    } else {
      dispatch(addBrandFilter(name));
    }
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="flex mb-5">
      <input
        className="rounded-sm w-5 h-5 mr-3 shadow-filter-item border-none"
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
      ></input>
      <span>
        {name} <span className="text-c-black-300 ml-1">({freq})</span>
      </span>
    </div>
  );
}

export default FilterItem;
