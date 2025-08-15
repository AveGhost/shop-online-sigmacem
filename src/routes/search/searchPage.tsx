import { useSearchParams } from 'react-router'
import { useState } from 'react';

import SearchInput from '../../components/searchInput/searchInput';
import Product from '../../components/product/product';
import SkeletonLoader from '../../components/skeleton/skeleton-loader';
import Navigation from '../../components/navigation/navigation';
import ProductSection from '../../components/product/productSection';

import useSearchProducts from '../../hooks/useSearchProducts';
import useDebounce from '../../hooks/useDebounceHook';

const SearchPage = () => {
    const [params] = useSearchParams()
    const name = params.get('name') || '';

    const [search, setSearch] = useState<string>('')

    const debounceSearch = useDebounce(search, 500);

    const { products, loading, error } = useSearchProducts(name, 10);

    const { products: searchedProducts, loading: searching, error: searchError } = useSearchProducts(debounceSearch);

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    return (
        <main className='p-2'>
            <Navigation>
                <SearchInput search={search} onChange={handleSearch} searchedProducts={searchedProducts} loading={searching} error={searchError} />
            </Navigation>

            <ProductSection heading={`Search results for "${name}"`}>
                {loading ? (
                    <SkeletonLoader />
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : products.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {products.map((product) => (
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

export default SearchPage