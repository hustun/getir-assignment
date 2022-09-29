function FilterItemPlaceholder() {
  return (
    <div className="flex mb-[18px] animate-pulse">
      <div className="mr-3 w-[22px] h-[22px]">
        <div className="rounded-sm w-full h-full shadow-filter-item border-none"></div>
      </div>

      <div className="max-w-[140px] w-full flex items-center">
        <div className="w-14 h-3 rounded-sm bg-slate-300"></div>
        <div className="w-6 h-3 rounded-sm bg-slate-200 ml-1"></div>
      </div>
    </div>
  );
}

export default FilterItemPlaceholder;
