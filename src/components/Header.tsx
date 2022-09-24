function Header() {
  return (
    <div className="flex justify-center items-center relative p-4 bg-header-blue">
      <img className="" src="/Logo.svg" alt="" />
      <div className="flex absolute right-0 mr-32 px-6 p-4 bg-header-dark-blue text-white h-full items-center">
        ₺ 39,97
      </div>
    </div>
  );
}

export default Header;
