import React from 'react'
import './App.css';

// Primefaces
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/header'
import Pages from './components/pages'
import Overlay from './components/overlay';


function App() {  

  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Pages />
      </main>

      <footer>
        <div className='footer-center'>
          footer
        </div>
      </footer>

      <Overlay />
    </>
  );
}

export default App;
