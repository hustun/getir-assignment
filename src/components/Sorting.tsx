function Sorting() {
  const sortingCategories: Array<string> = [
    'Price low to high',
    'Price high to low',
    'New to old',
    'Old to new',
  ];
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-c-gray-500 mb-3">Sorting</h2>
      <div className="w-[286px] bg-white text-c-black-600 text-sm rounded-sm p-6">
        {sortingCategories.map((el: string) => {
          return (
            <div className="flex mb-5">
              <div className="rounded-full border-2 border-[#DFDEE2] hover:border-[#c9c8cc] w-5 h-5 mr-3"></div>
              <p>{el}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sorting;
