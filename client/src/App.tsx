import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import SupportPage from '@/pages/SupportPage';
import { ROUTER_LINK } from '@/shared/constants';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
    return (
        <Routes>
            <Route path={ROUTER_LINK.MAIN_PAGE} element={<MainPage />} />
            <Route path={ROUTER_LINK.SUPPORT_PAGE} element={<SupportPage />} />
            <Route
                path={ROUTER_LINK.NOT_FOUND_PAGE}
                element={<NotFoundPage />}
            />
        </Routes>
    );
}

export default App;
