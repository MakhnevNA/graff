import { HEADER_LINK } from '@/components/UI/Header/constants';
import { ROUTER_LINK } from '@/shared/constants';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="border-gray-1 flex flex-col border-b">
            <div className="mx-10 flex py-4">
                <Link
                    to={ROUTER_LINK.MAIN_PAGE}
                    className="text-2xl font-bold text-black"
                >
                    graff.test
                </Link>
                <nav className="flex w-full items-center justify-center">
                    <ul className="flex gap-4">
                        {HEADER_LINK.map((link) => {
                            return (
                                <li key={link.title} className="text-lg">
                                    <NavLink
                                        to={link.url}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-blue-1'
                                                : 'hover:text-blue-2 transition-colors duration-200'
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
        </header>
    );
}

export default Header;
