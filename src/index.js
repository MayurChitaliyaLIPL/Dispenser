import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Dashboard from './dashbord'
// import ShadcnDashboard from './shadcn1';
// import ResizableDemo from './resize';
// import Charts from './shadcn2';
// import MiniDrawer from './sidebar';
// import Componentpie from './pie';
// import CompanyRegistrationForm from './temp';
// import SignIn from './login';
import App from './sidebar';
// import MiniDrawer from './sidebar';

// import Splitt from './splitscreen/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);
reportWebVitals();
