import { useAppSelector } from '../app/hooks';

function Header() {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex justify-center items-center relative p-4 bg-primary">
      <img
        className=""
        src="/Logo.svg"
        alt="Website Logo"
        width={142}
        height={41}
      />
      <div className="flex absolute right-0 mr-4 sm:mr-12 lg:mr-32 px-4 sm:px-6 p-4 bg-header-dark-blue text-white h-full items-center font-semibold">
        <span className="font-turkish-lira mr-1">₺</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Header;
