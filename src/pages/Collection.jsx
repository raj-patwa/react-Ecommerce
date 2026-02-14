import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from "../components/ProductItem";

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // FILTER + SORT LOGIC
  const applyFilter = () => {
    let updated = [...products];

    // 🔍 Search Filter
    if (search && showSearch) {
      updated = updated.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category.length > 0) {
      updated = updated.filter(item =>
        category.includes(item.category)
      );
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      updated = updated.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting
    if (sortType === "low-high") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updated);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, sortType, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>

      {/* FILTER SIDEBAR */}
      <div className='min-w-60'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Categories */}
        <div className={`border pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          {['Men', 'Women', 'Kids'].map(cat => (
            <label key={cat} className='flex gap-2 text-sm text-gray-700'>
              <input type="checkbox" value={cat} onChange={toggleCategory} />
              {cat}
            </label>
          ))}
        </div>

        {/* Type */}
        <div className={`border pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
            <label key={type} className='flex gap-2 text-sm text-gray-700'>
              <input type="checkbox" value={type} onChange={toggleSubCategory} />
              {type}
            </label>
          ))}
        </div>

      </div>

      {/* PRODUCTS */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {filterProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            filterProducts.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          )}

        </div>

      </div>

    </div>
  );
};

export default Collection;
