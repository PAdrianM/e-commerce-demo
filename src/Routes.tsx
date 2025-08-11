import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/index';
import BlankLayout from './BlankLayout';

const Routes = () => {
    // Use different basename for development vs production
    const basename = import.meta.env.MODE === 'production' ? '/e-commerce-demo' : '';
    
    return (
        <Router basename={basename}>
            <RouterRoutes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<BlankLayout />}>
                    {/* <Route path="/thanks" element={<Thanks />} /> */}
                </Route>
            </RouterRoutes>
        </Router>
    );
}

export default Routes;