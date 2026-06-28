import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="logo">
            <Link href={'/'}>
                <Image src={'/main-logo.png'} alt="logo" width={246} height={256} priority={true} />
            </Link>
        </div>
    )
}

export default Logo;