import Product from '../types/Product';
import ProductCard from './ProductCard';

function ProductList() {
  const productList: Array<Product> = [
    {
      tags: ['Trees'],
      price: 10.99,
      name: 'Handcrafted Trees Mug',
      description:
        'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
      slug: 'Handcrafted-Trees-Mug',
      added: 1485723766805,
      manufacturer: 'OHara-Group',
      itemType: 'mug',
    },
    {
      tags: ['Beach', 'Ocean', 'Water'],
      price: 19.99,
      name: 'Rustic Beach Mug',
      description:
        'totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus',
      slug: 'Rustic-Beach-Mug',
      added: 1481573896833,
      manufacturer: 'Sipes-Inc',
      itemType: 'mug',
    },
    {
      tags: ['Animal', 'Bear'],
      price: 17.99,
      name: 'Handcrafted Bear Mug',
      description:
        'vitae mollitia et in accusantium est voluptas officiis est non',
      slug: 'Handcrafted-Bear-Mug',
      added: 1485991071829,
      manufacturer: 'Weissnat-Schowalter-and-Koelpin',
      itemType: 'mug',
    },
    {
      tags: ['Road'],
      price: 15.99,
      name: 'Refined Road Mug',
      description:
        'explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam',
      slug: 'Refined-Road-Mug',
      added: 1482213983048,
      manufacturer: 'Bernier-Hane',
      itemType: 'mug',
    },
    {
      tags: ['Ocean', 'Rocks'],
      price: 10.99,
      name: 'Unbranded Ocean Mug',
      description:
        'facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui',
      slug: 'Unbranded-Ocean-Mug',
      added: 1483408192004,
      manufacturer: 'Franecki---Gaylord',
      itemType: 'mug',
    },
    {
      tags: ['Sunset', 'Beach', 'Ocean'],
      price: 9.99,
      name: 'Rustic Ocean Mug',
      description:
        'libero reprehenderit blanditiis quidem laborum ullam quae fuga consequuntur minima praesentium consequatur qui excepturi nostrum tempora sunt deleniti',
      slug: 'Rustic-Ocean-Mug',
      added: 1485511118573,
      manufacturer: 'Bayer-and-Sons',
      itemType: 'mug',
    },
    {
      tags: ['Rust', 'Old', 'Car'],
      price: 19.99,
      name: 'Sleek Old Mug',
      description:
        'necessitatibus suscipit iure quia voluptates voluptas quidem ipsum laboriosam adipisci',
      slug: 'Sleek-Old-Mug',
      added: 1485759837725,
      manufacturer: 'Boyle-LLC',
      itemType: 'mug',
    },
    {
      tags: ['Coffee'],
      price: 14.99,
      name: 'Sleek Coffee Mug',
      description:
        'et adipisci explicabo consequatur rerum voluptas dolorem qui omnis vel',
      slug: 'Sleek-Coffee-Mug',
      added: 1479259996312,
      manufacturer: 'Franecki---Gaylord',
      itemType: 'mug',
    },
  ];
  return (
    <div className="bg-white grid grid-cols-4 gap-6 p-5">
      {productList.map((product) => {
        return <ProductCard name={product.name} price={product.price} />;
      })}
    </div>
  );
}

export default ProductList;
