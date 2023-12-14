import { Route } from 'react-router-dom';
import './App.css';
import harvardArt from './data/hardvardArt.js'
import GalleryNavigation from './components/GalleryNavigation/index.js';
import GalleryView from './components/GalleryView/index.js';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />



      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;

// Default code inserted when creating a new React app

// import logo from './logo.svg';

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>