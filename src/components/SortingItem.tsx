import SortingType from '../common/SortingType';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSortingType } from '../features/product/productSlice';

export type SortingItemProps = {
  label: string;
  type: SortingType;
};

function SortingItem({ label, type }: SortingItemProps) {
  const sortingType = useAppSelector((state) => state.product.sortingType);
  const dispatch = useAppDispatch();

  const handleSelected = () => {
    dispatch(setSortingType(type));
  };

  return (
    <div className="flex mb-5">
      <div
        className={`flex justify-center items-center rounded-full border-2 w-5 h-5 mr-3 select-none cursor-pointer ${
          type === sortingType
            ? 'border-primary'
            : 'border-[#DFDEE2] hover:border-[#c9c8cc]'
        }`}
        onClick={handleSelected}
      >
        {type === sortingType && (
          <img
            src="/checkmark.svg"
            alt="Checkmark to show the selected sorting type"
          />
        )}
      </div>
      <span>{label} </span>
    </div>
  );
}

export default SortingItem;
