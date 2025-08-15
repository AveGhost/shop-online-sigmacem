import { Link, useLocation } from "react-router-dom"

const Navigation = ({children}: {children?: React.ReactNode}) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav className='border-b border-zinc-100 py-6'>
            <div className="container mx-auto flex items-center flex-col sm:flex-row sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                    {isHome ? (
                    <>
                        <img src="/logo.svg" alt="Shop Online" />
                        <h1 className="text-lg font-bold">ShopOnline</h1>
                    </>
                    ) : (
                    <Link to="/" className="flex items-center gap-4">
                        <img src="/logo.svg" alt="Shop Online" />
                        <h1 className="text-lg font-bold">ShopOnline</h1>
                    </Link>
                    )}
                </div>
                {children}
            </div>
        </nav>
    )
}

export default Navigation