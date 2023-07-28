import './App.css';
import React from 'react';
import WishForm from './components/WishForm';
import WishList from './components/WishList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nikola's bucket list</h1>
      </header>
      <WishForm />
      <WishList/>
      
    </div>
  );
}

export default App;
