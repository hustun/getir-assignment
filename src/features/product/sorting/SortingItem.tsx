import SortingType from '../../../common/SortingType';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSortingType } from '../productSlice';

export type SortingItemProps = {
  label: string;
  type: SortingType;
  className?: string;
};

function SortingItem({ label, type, className }: SortingItemProps) {
  const sortingType = useAppSelector((state) => state.product.sortingType);
  const dispatch = useAppDispatch();

  const handleSelected = () => {
    dispatch(setSortingType(type));
  };

  return (
    <div className={`flex ${className !== undefined ? className : ''}`}>
      <div
        className={`flex justify-center items-center rounded-full border-2 w-[22px] h-[22px] mr-3 select-none cursor-pointer ${
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
            width={10}
            height={7}
          />
        )}
      </div>
      <span>{label} </span>
    </div>
  );
}

export default SortingItem;
