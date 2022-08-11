import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { Loginpage } from './pages/login';
import { SignPage } from './pages/signUp';
import{PortressInfoPage,PortressInfoPage2} from './pages/portress-Info';

import './styles/login.css';
import './styles/navbar.css';
import './styles/PortressInfo.css';

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={`App ${theme}`}>
       <BrowserRouter>
        <Routes>
        <Route path='/sign' element={< SignPage/>} />
        <Route path='/login' element={< Loginpage/>} />
        <Route path='/portress' element={<PortressInfoPage />} />
        <Route path='/portress2' element={<PortressInfoPage2 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
