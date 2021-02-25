import Link from 'next/link';
import style from '../../styles/navbar.module.sass'
const Navbar = () => {

    return (
        <>
            <div className="Navbar">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Navbar;