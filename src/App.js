import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Playlist from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Sidebar/>
      <div className="main-container">
        <Header searchTerm= {searchTerm} setSearchTerm={setSearchTerm}/>
        <Playlist searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default App;
