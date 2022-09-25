type FilterProps = {
  name: string;
  filterList: Array<string>;
};

function Filter({ name, filterList }: FilterProps) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-c-gray-500 mb-3">{name}</h2>
      <div className="w-[286px] bg-white text-c-black-600 text-sm py-6 px-6 rounded-sm">
        <input
          className="border px-4 py-2 w-full mb-4"
          type="text"
          name=""
          id=""
          placeholder={'Search'}
        />
        <div className="overflow-y-scroll h-32">
          {filterList.map((el: string) => {
            return (
              <div className="flex mb-5">
                <div className="rounded-sm w-5 h-5 mr-3 shadow-filter-item"></div>
                <p>{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
