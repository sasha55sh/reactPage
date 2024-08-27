import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Main from './pages/Main/Main';
import Sidebar from './pages/Sidebar/Sidebar';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <div className='container'>
      <Footer />
      <Header />
      <Main />
      <Sidebar />
    </div>
  )

