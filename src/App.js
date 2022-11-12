
import {Routes, Route} from 'react-router-dom';
import Authcontrol from './layouts/authcontrol';
import Companylogin from './pages/companylogin';
import Companysignup from './pages/companysignup';
import Verify from './pages/verify';
import Forgot from './pages/forgot';

import Adminmaster from './layouts/adminmaster';
import Companyinfo1 from './pages/companyinfo1';
import Companyinfo2 from './pages/companyinfo2';
import Departments from './pages/departments';
import Teams from './pages/teams';
import Invitemember from './pages/invitemember';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Authcontrol />}>
    <Route index  element={<Companylogin />} />
    <Route path="companylogin" element={<Companylogin />} />
    <Route path="companysignup" element={<Companysignup />} />
    <Route path="forgotpassword" element={<Forgot />} />
    <Route path="verify" element={<Verify />} />
    </Route>
 
    <Route path="/admin" element={<Adminmaster />}>
    <Route index element={<Companyinfo1 />} />
    <Route path="companyinfo1" element={<Companyinfo1 />} />
    <Route path="companyinfo2" element={<Companyinfo2 />} />
    <Route path="departments" element={<Departments />} />
    <Route path="teams" element={<Teams />} />
    <Route path="invitemember" element={<Invitemember />} />
    
    </Route>
    
    </Routes>
 
    </div>
  );
}

export default App;
