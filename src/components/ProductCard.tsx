type ProductProps = {
  name: string;
  price: number;
};

function ProductCard({ name, price }: ProductProps) {
  return (
    <div className="flex flex-col h-[225px]">
      <div className="p-4 border-[1.17666px] border-[#F3F0FE] rounded-xl">
        <img src="/product92.png" alt="" />
      </div>

      <span className="font-bold text-primary mt-2">
        <span className="font-['Helvetica'] font-medium">₺ </span>
        {price}
      </span>
      <h2 className="font-semibold">{name}</h2>
      <button className="w-full bg-primary hover:opacity-80 text-white font-bold py-[1px] px-4 rounded mt-auto text-xs leading-5">
        Add
      </button>
    </div>
  );
}

export default ProductCard;
