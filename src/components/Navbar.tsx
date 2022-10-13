import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex items-center justify-between fixed top-0 w-full bg-white ">
            {/* Left Side */}
            <div className="ml-8 text-2xl">
                Will
            </div>
            {/* Right Sided */}
            <div>
                <ul className={`main-nav flex`}>
                    <li className="m-4">
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li className="m-4">
                    <Link href="#" >
                            SignIn
                        </Link>
                    </li>
                    <li className="m-4">
                    <Link href="#" >
                            SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar