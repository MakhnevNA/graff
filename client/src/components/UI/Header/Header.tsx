import { HEADER_LINK } from '@/components/UI/Header/constants';
import { ROUTER_LINK } from '@/shared/constants';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="flex py-4 mx-10 ">
            <Link
                to={ROUTER_LINK.MAIN_PAGE}
                className="text-black font-bold text-2xl"
            >
                graff.test
            </Link>
            <nav className="flex items-center justify-center w-full">
                <ul className="flex gap-4">
                    {HEADER_LINK.map((link) => {
                        return (
                            <li key={link.title} className="text-lg">
                                <NavLink
                                    to={link.url}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-blue-1'
                                            : 'hover:text-blue-2'
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
