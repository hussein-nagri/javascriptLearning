import React from 'react';
import './App.css';
import Jobs from './Jobs';


const jobs = [
  { title: "SWE1 1", company: "google" },
  { title: "SWE1 2", company: "Google" }
]


function App() {
  return (
    <div className="App">
      <Jobs jobs={jobs}></Jobs>
    </div>
  );
}

export default App;
