import { ReactNode } from 'react';
import Header from '../UI/Header/Header';

interface IContainerProps {
    children: ReactNode;
}

function Container({ children }: IContainerProps) {
    return (
        <>
            <header className="flex flex-col border-b border-gray-1">
                <Header />
            </header>
            {children}
        </>
    );
}

export default Container;
