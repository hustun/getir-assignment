function ProductCardPlaceholder() {
  return (
    <div className="flex flex-col h-[225px] animate-pulse">
      <div className="p-4 border-[1.17666px] border-[#F3F0FE] rounded-xl">
        <img
          className="max-w-none h-[92px] mx-auto"
          src="/product92.png"
          alt="Placeholder Product"
          width={92}
          height={92}
        />
      </div>
      <div className="rounded-full mt-2">
        <div className="bg-slate-300 h-2 w-1/2 mb-4 mt-2"></div>
        <div className="bg-slate-200 h-2 w-full"></div>
      </div>

      <div className="w-full bg-slate-200 text-white py-[1px] px-4 rounded mt-auto h-6"></div>
    </div>
  );
}

export default ProductCardPlaceholder;
