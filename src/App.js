import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home/index'

function App() {
  return (
     <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
        </Route>

     </Routes>
        
  );
}

export default App;
