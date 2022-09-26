import { useAppSelector } from '../app/hooks';

function Header() {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex justify-center items-center relative p-4 bg-primary">
      <img className="" src="/Logo.svg" alt="" />
      <div className="flex absolute right-0 mr-32 px-6 p-4 bg-header-dark-blue text-white h-full items-center">
        ₺ {totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Header;
