import { useState } from 'react'

import SkeletonLoader from '../../components/skeleton/skeleton-loader'
import SearchInput from '../../components/searchInput/searchInput'
import Product from '../../components/product/product'
import Navigation from '../../components/navigation/navigation'
import ProductSection from '../../components/product/productSection'

import useDebounce from '../../hooks/useDebounceHook'
import useProductsList from '../../hooks/useProductsList'
import useSearchProducts from '../../hooks/useSearchProducts'

import getNewArrivals from '../../utils/getNewArrivals'
import getFeaturedProducts from '../../utils/getFeaturedProducts'

function Home() {
  const { products: featuredProducts, loading: loadingFeatured, error: errorFeatured } = useProductsList(getFeaturedProducts);
  const { products: newArrivals, loading: loadingNewArrivals, error: errorNewArrivals } = useProductsList(getNewArrivals);

  const [search, setSearch] = useState<string>('')

  const debounceSearch = useDebounce(search, 500);

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const { products: searchedProducts, loading: loadingSearch, error: errorSearch } = useSearchProducts(debounceSearch);

  return (
    <main className='p-2'>
      <Navigation>
        <SearchInput 
          search={search} 
          onChange={handleSearch} 
          searchedProducts={searchedProducts} 
          loading={loadingSearch} 
          error={errorSearch} 
        />
      </Navigation>

      <ProductSection heading="Featured Products">
        {loadingFeatured ? (
          <SkeletonLoader />
        ) : errorFeatured ? (
          <p className="text-red-500">{errorFeatured}</p>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </ProductSection>

      <ProductSection heading="New Arrivals">
        {loadingNewArrivals ? (
          <SkeletonLoader />
        ) : errorNewArrivals ? (
          <p className="text-red-500">{errorNewArrivals}</p>
        ) : newArrivals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {newArrivals.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </ProductSection>
    </main>
  )
}

export default Home
