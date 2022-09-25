function Cart() {
  const cardProducts: Array<{ name: string; price: number; added: number }> = [
    { name: 'Example Product', price: 14.99, added: 1231 },
    { name: 'Example Product 2', price: 9.99, added: 1234 },
  ];
  return (
    <div className="border-8 border-primary p-4 rounded-sm">
      <ul>
        {cardProducts.map((product) => {
          return (
            <li key={product.added} className="flex border-b py-4">
              <div className="flex flex-col">
                <h2>{product.name}</h2>
                <span className="text-primary font-semibold">
                  ₺{product.price}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-fit border-primary border-2 font-semibold text-primary px-6 py-[17px] ml-auto mt-4 rounded-sm">
        ₺39,97
      </div>
    </div>
  );
}

export default Cart;
