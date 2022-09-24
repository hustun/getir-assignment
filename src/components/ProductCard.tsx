type ProductProps = {
  name: string;
  price: number;
};

function ProductCard({ name, price }: ProductProps) {
  return <div className="border shadow p-4 rounded h-[225px]">{name}</div>;
}

export default ProductCard;
