const SkeletonLoader = () => {
    return (
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {Array.from({length: 10}).map((_, index) => (
                <div key={index} className="mx-auto w-full h-[252px] max-w-sm rounded-xl">
                    <div className="flex flex-col justify-start h-full animate-pulse">
                        <div className="h-50 rounded bg-zinc-400"></div>
                        <div className="py-2 flex flex-col h-full gap-4">
                            <div className="h-4 rounded bg-zinc-400"></div>
                            <div className="h-2 w-6 rounded bg-zinc-400"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonLoader