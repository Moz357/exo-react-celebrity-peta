import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CelebritiesPage from "./page/CelebritiesPage";
import CelebrityDetailPage from "./page/CelebrityDetailPage";
import RandomIndexPage from "./page/RamdomIndexPage";
import TvSpeakersPage from "./page/TvSpeakersPage";
import CopyrightPage from "./page/CopyrightPage";
import FormMessagePage from "./page/FormMessagePage";
import LikesPage from "./page/LikesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<CelebritiesPage />} />
        <Route path="/celebrity/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities/random" element={<RandomIndexPage />} />
        <Route path="/speakers" element={<TvSpeakersPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/message" element={<FormMessagePage />} />
        <Route path="/like" element={<LikesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


/**
 * import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />} />
</Routes>

</BrowserRouter>


  );
}

export default App;
*/
