import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

const jobs = [
  { title: "SWE1 1", company: "google" },
  { title: "SWE1 2", company: "Google" }
]

async function fetchJobs(updateCb) {

  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log("Hi There", json);
  updateCb(json);
}

function App() {

  const [jobsList, setjobsList] = useState([]);


  useEffect(() => {

    fetchJobs(setjobsList)
  }, [])


  return (
    <div className="App">
      <Jobs jobs={jobsList}></Jobs>
    </div>
  );
}

export default App;
