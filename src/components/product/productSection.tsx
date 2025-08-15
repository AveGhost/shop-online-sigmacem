const ProductSection = ({children, heading}: {children: React.ReactNode, heading: string}) => {
    return (
        <section className='max-w-[960px] mx-auto py-12'>
            <h2 className='text-[22px] font-bold mb-6'>{heading}</h2>
            {children}
      </section>
    )
}

export default ProductSection