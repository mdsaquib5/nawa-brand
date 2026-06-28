import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href={'/'}>Shop</Link></li>
                <li className="dropdown"><Link href={'/'}>Collections</Link>
                    <ul className="dropdown-ul">
                        <li><Link href={'/'}>Kurta Sets</Link></li>
                        <li><Link href={'/'}>Embroidered Suits</Link></li>
                        <li><Link href={'/'}>Daily Wear</Link></li>
                    </ul></li>
                <li><Link href={'/'}>Festive Edit</Link></li>
                <li><Link href={'/'}>Odisha Edit</Link></li>
                <li><Link href={'/'}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;