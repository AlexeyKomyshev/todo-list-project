import { classNames } from '@/shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Navbar } from '@/widgets/Navbar/Navbar';

const App = () => {
    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
