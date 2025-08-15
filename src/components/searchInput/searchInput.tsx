import type { IProduct } from "../../types/Product"
import { Link } from "react-router-dom"

interface ISearchInput {
  search: string
  onChange: (value: string) => void
  searchedProducts: IProduct[]
  loading?: boolean;
  error?: string | null;
}

const SearchInput = ({search, onChange, searchedProducts, loading, error}: ISearchInput) => {
    return (
        <div className='relative focus-within:[&>ul]:flex w-full sm:w-auto'>
          <img src='/search.svg' alt='Search' className='absolute top-1/2 left-3 -translate-y-1/2 w-6 h-6' />
          <input type='text' value={search} onChange={(e) => onChange(e.target.value)} placeholder='Search for products' className='text-[#964F52] bg-[#F2E8E8] w-full sm:w-auto rounded-xl py-3 pl-12 pr-6 z-10 focus:outline-none focus:ring-2 focus:ring-[#964F52]' />
          {loading && (
              <div className="absolute top-13 left-0 w-full bg-[#F2E8E8] rounded-xl p-4 text-center text-sm text-gray-500">
                Loading...
              </div>
          )}

          {error && !loading && (
            <div className="absolute top-13 left-0 w-full bg-red-100 rounded-xl p-4 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && searchedProducts.length > 0 && (
            <ul className="hidden absolute flex-col top-13 left-0 w-full bg-[#F2E8E8] rounded-xl pb-4">
              {searchedProducts.map((product, index) => (
                <li
                  className={`flex items-center gap-4 hover:bg-zinc-900/20 py-2 cursor-pointer transition-colors duration-300 px-4 ${
                    index === 0 ? "rounded-t-xl" : ""
                  }`}
                  key={product.id}
                >
                  <img src={product.thumbnail} alt={product.title} className="w-6 h-6" />
                  <p className="text-sm truncate">{product.title}</p>
                </li>
              ))}
              <li className="mx-auto mt-2">
                <Link
                  to={`/search?name=${search}`}
                  className="relative text-[#964F52] text-sm w-fit transition-opacity duration-300 hover:opacity-90 overflow-hidden before:content-[''] before:w-[50px] before:h-[1px] before:absolute before:bg-[#964F52] before:left-0 before:right-0 before:-bottom-1 before:mx-auto before:scale-x-0 before:transition-all before:duration-300 hover:before:-scale-x-100"
                >
                  See all results
                </Link>
              </li>
            </ul>
          )}
        </div>
    )
}

export default SearchInput