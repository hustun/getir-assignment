import cartReducer, {
  addProduct,
  removeProduct,
  clear,
  CartState,
} from './cartSlice';

describe('card reducer', () => {
  const initialState: CartState = {
    cart: [],
    totalPrice: 0,
  };
  const initialStateFull: CartState = {
    cart: [
      {
        count: 2,
        product: {
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
      },
    ],
    totalPrice: 21.98,
  };
  const testProduct = {
    tags: ['Trees'],
    price: 10.99,
    name: 'Handcrafted Trees Mug',
    description:
      'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
    slug: 'Handcrafted-Trees-Mug',
    added: 1485723766805,
    manufacturer: 'OHara-Group',
    itemType: 'mug',
  };
  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      cart: [],
      totalPrice: 0,
    });
  });

  it('should handle adding product to the cart', () => {
    // Arrange
    const expectedCart = {
      cart: [
        {
          count: 1,
          product: {
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
        },
      ],
      totalPrice: 10.99,
    };

    //Act
    const actual = cartReducer(initialState, addProduct(testProduct));

    //Assert
    expect(actual.cart).toEqual(expectedCart.cart);
    expect(actual.totalPrice).toEqual(expectedCart.totalPrice);
  });

  it('should handle removing product from the cart', () => {
    const expedtedItemCount = 1;
    const expectedPrice = 10.99;
    const actual = cartReducer(initialStateFull, removeProduct(testProduct));
    expect(actual.cart.length).toEqual(expedtedItemCount);
    expect(actual.totalPrice).toEqual(expectedPrice);
  });

  it('should handle clearing the cart', () => {
    const actual = cartReducer(initialStateFull, clear());
    expect(actual.cart.length).toEqual(0);
    expect(actual.totalPrice).toEqual(0);
  });
});
