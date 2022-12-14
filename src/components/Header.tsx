import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Cart from '../features/cart/Cart';
import Filter from '../features/product/filtering/Filter';
import ProductTypeFilter from '../features/product/filtering/ProductTypeFilter';
import Sorting from '../features/product/sorting/Sorting';
import CartIcon from './icons/CartIcon';
import FilterIcon from './icons/FilterIcon';
import LockIcon from './icons/LockIcon';
import Modal from './ui/Modal';

function Header() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const toggleFilterModal = () => {
    setShowFilterModal((prevState) => !prevState);
  };

  const toggleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center px-4 pb-[19px] pt-[17px] bg-primary z-10">
      <img
        className=""
        src="/Logo.svg"
        alt="Website Logo"
        width={142}
        height={41}
      />
      <div className="absolute w-full def:max-w-[1229px] h-full">
        <div className="hidden lg:flex absolute right-0 px-4 sm:px-6 p-4 mr-8 xl:mr-16 def:mr-0 bg-header-dark-blue text-white h-full items-center font-semibold">
          <LockIcon className="mr-2" />
          <span className="font-turkish-lira mr-1">₺</span>
          <span>{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex lg:hidden absolute top-0 left-0 mt-[77px] bg-white w-full py-2 px-4 text-primary justify-between">
        <div className="flex justify-center items-center">
          <button className="mr-4" onClick={toggleFilterModal}>
            <FilterIcon />
          </button>
          <div className="flex">
            <ProductTypeFilter />
          </div>
        </div>

        <button
          className="flex bg-primary text-white rounded-sm p-2"
          onClick={toggleCartModal}
        >
          <CartIcon className="mr-2" />
          <span className="font-turkish-lira mr-1">₺</span>
          <span>{totalPrice.toFixed(2)}</span>
        </button>
      </div>
      {showFilterModal && (
        <Modal className="block lg:hidden" closeModal={toggleFilterModal}>
          <div className="flex flex-col lg:hidden justify-between">
            <Sorting />
            <Filter name="Brands" searchPlaceholder="Search brand" />
            <Filter name="Tags" searchPlaceholder="Search tag" />
          </div>
        </Modal>
      )}
      {showCartModal && (
        <Modal className="block lg:hidden pt-12" closeModal={toggleCartModal}>
          <Cart />
        </Modal>
      )}
    </div>
  );
}

export default Header;
