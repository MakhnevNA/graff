import { ReactNode } from 'react';
import Header from '../UI/Header/Header';

interface IContainerProps {
    children: ReactNode;
}

function Container({ children }: IContainerProps) {
    return (
        <>
            <Header />
            <main className="flex-auto">{children}</main>
        </>
    );
}

export default Container;
