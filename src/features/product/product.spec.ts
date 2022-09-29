import SortingType from '../../common/SortingType';
import productReducer, {
  initialize,
  addBrandFilter,
  addTagFilter,
  removeBrandFilter,
  removeTagFilter,
  setSortingType,
  setTypeFilter,
  ProductState,
  clearBrandFilters,
} from './productSlice';

describe('card reducer', () => {
  const initialProductArray = [
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
      itemType: 'shirt',
    },
  ];
  const initialStateEmpty: ProductState = {
    products: [],
    filteredProducts: [],
    brandFilters: [],
    tagFilters: [],
    sortingType: SortingType.P_ASC,
    typeFilter: '',
    isLoading: true,
  };

  const initialStateFull: ProductState = {
    products: [...initialProductArray],
    filteredProducts: [...initialProductArray],
    brandFilters: [],
    tagFilters: [],
    sortingType: SortingType.P_ASC,
    typeFilter: '',
    isLoading: true,
  };

  it('should handle initial state', () => {
    expect(productReducer(undefined, { type: 'unknown' })).toEqual({
      products: [],
      filteredProducts: [],
      brandFilters: [],
      tagFilters: [],
      sortingType: SortingType.P_ASC,
      typeFilter: '',
      isLoading: true,
    });
  });

  it('should handle initializing products', () => {
    const expectedProductCount = initialProductArray.length;

    const actual = productReducer(
      initialStateEmpty,
      initialize(initialProductArray)
    );
    expect(actual.products.length).toEqual(2);
    expect(actual.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle sorting by price', () => {
    // Arrange
    const expectedProductSlug = 'Rustic-Beach-Mug';

    //Act
    const actual = productReducer(
      initialStateFull,
      setSortingType(SortingType.P_DESC)
    );

    //Assert
    expect(actual.filteredProducts.at(0)?.slug).toEqual(expectedProductSlug);
  });

  it('should handle sorting by date', () => {
    // Arrange
    const expectedProductSlug = 'Rustic-Beach-Mug';

    //Act
    const actual = productReducer(
      initialStateFull,
      setSortingType(SortingType.D_ASC)
    );

    //Assert
    expect(actual.filteredProducts.at(0)?.slug).toEqual(expectedProductSlug);
  });

  it('should handle filtering by type', () => {
    // Arrange
    const expectedProductCount = 1;

    //Act
    const actual = productReducer(initialStateFull, setTypeFilter('mug'));

    //Assert
    expect(actual.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle filtering by tag', () => {
    // Arrange
    const expectedProductCount = 1;

    //Act
    const actual = productReducer(initialStateFull, addTagFilter('Ocean'));

    //Assert
    expect(actual.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle filtering by brand', () => {
    // Arrange
    const expectedProductCount = 1;

    //Act
    const actual = productReducer(
      initialStateFull,
      addBrandFilter('OHara-Group')
    );

    //Assert
    expect(actual.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle clearing brand filters', () => {
    // Arrange
    const expectedFilteredCount = 1;
    const expectedProductCount = 2;

    //Act
    let actual = productReducer(
      initialStateFull,
      addBrandFilter('OHara-Group')
    );

    actual = productReducer(initialStateFull, addBrandFilter('OHara-Group'));

    expect(actual.filteredProducts.length).toEqual(expectedFilteredCount);

    const actual2 = productReducer(actual, clearBrandFilters());

    //Assert
    expect(actual2.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle clearing tag filters', () => {
    // Arrange
    const expectedFilteredCount = 1;
    const expectedProductCount = 2;

    //Act
    let actual = productReducer(initialStateFull, addTagFilter('Ocean'));

    actual = productReducer(initialStateFull, addBrandFilter('OHara-Group'));

    expect(actual.filteredProducts.length).toEqual(expectedFilteredCount);

    const actual2 = productReducer(actual, clearBrandFilters());

    //Assert
    expect(actual2.filteredProducts.length).toEqual(expectedProductCount);
  });

  it('should handle adding and removing the filters', () => {
    const startingProductCount = initialStateFull.products.length;
    const expectedProductCount = 1;

    const actual1 = productReducer(
      initialStateFull,
      addBrandFilter('OHara-Group')
    );

    expect(actual1.filteredProducts.length).toEqual(expectedProductCount);

    const actual2 = productReducer(actual1, removeBrandFilter('OHara-Group'));

    expect(actual2.filteredProducts.length).toEqual(startingProductCount);

    const actual3 = productReducer(actual2, addTagFilter('Ocean'));

    expect(actual3.filteredProducts.length).toEqual(expectedProductCount);

    const actual4 = productReducer(actual3, removeTagFilter('Ocean'));

    expect(actual4.filteredProducts.length).toEqual(startingProductCount);
  });
});
