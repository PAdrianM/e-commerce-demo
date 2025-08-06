import './Layout.css';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './components/toggle/ThemeToggle';


const Layout: React.FC = () => {
    return (
        <div className='layout-container'>
            <header>
                {/* <Navbar /> */}
                <ThemeToggle />
            </header>
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;