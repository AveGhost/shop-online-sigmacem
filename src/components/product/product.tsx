import type { IProduct } from "../../types/Product"

const Product = ({ title, price, thumbnail }: IProduct) => {
    return (
        <div className='flex flex-col h-full rounded-xl cursor-pointer transition-colors duration-300 p-4 gap-3 hover:bg-zinc-900/20'>
            <img src={thumbnail} alt={title} className="w-full h-full object-contain rounded-xl" />
            <div className="mt-auto h-full">
                <h3 className="font-medium text-[#1C0D0F] truncate">{title}</h3>
                <span className="text-[#964F52]">${price}</span>
            </div>
        </div>
    )
}

export default Product