import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Template from './template';
import Bills from './use_bill';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoutes()
{
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Template/>}>
            <Route path='/bills' element={<Bills/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
root.render(<MyRoutes/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();