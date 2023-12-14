import { Route, Switch } from 'react-router-dom';
import './App.css';
import harvardArt from './data/hardvardArt.js'
import GalleryNavigation from './components/GalleryNavigation/index.js';
import GalleryView from './components/GalleryView/index.js';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route exact path="/">
          <>
            <h2>Harvard Art Museum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
          </>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
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