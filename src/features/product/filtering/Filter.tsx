import { useAppSelector } from '../../../app/hooks';
import FilterItem from './FilterItem';
import Container from '../../../components/ui/Container';
import React, { useState } from 'react';

type FilterProps = {
  name: string;
};

function Filter({ name }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const productList = useAppSelector((state) => state.product.products);

  const getBrands = () => {
    const uniqueBrands = new Map<string, number>();

    // count products for each manufacturer
    productList.forEach((item) => {
      const { manufacturer } = item;
      const keyValue = uniqueBrands.get(manufacturer);
      if (keyValue === undefined) {
        uniqueBrands.set(manufacturer, 1);
      } else {
        uniqueBrands.set(manufacturer, keyValue + 1);
      }
    });
    return uniqueBrands;
  };

  const getTags = () => {
    const uniqueTags = new Map<string, number>();

    // count products for each tag
    productList.map((item) =>
      item.tags.forEach((tag) => {
        const keyValue = uniqueTags.get(tag);
        if (keyValue === undefined) {
          uniqueTags.set(tag, 1);
        } else {
          uniqueTags.set(tag, keyValue + 1);
        }
      })
    );
    return uniqueTags;
  };

  const getData = () => {
    if (name === 'Brands') {
      return getBrands();
    }
    return getTags();
  };

  const data = getData();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold text-c-gray-500 mb-3">{name}</h2>
      <Container>
        <div className="px-6 pt-6">
          <input
            className="border-2 px-4 py-2 w-full"
            type="text"
            name=""
            id=""
            placeholder={'Search'}
            onChange={(e) => {
              handleSearch(e);
            }}
            value={searchQuery}
          />
        </div>

        <div className="pb-6 mt-4">
          <div className="overflow-y-scroll h-32 pl-6 pt-2 mr-6">
            {Array.from(data.keys())
              .filter((el) => {
                return el.toLowerCase().includes(searchQuery.toLowerCase());
              })
              .map((el: string, i: number) => {
                return (
                  <FilterItem
                    key={el}
                    name={el}
                    type={name}
                    freq={data.get(el)}
                  />
                );
              })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Filter;
