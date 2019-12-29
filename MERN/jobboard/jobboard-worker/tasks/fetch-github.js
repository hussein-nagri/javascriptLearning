var fetch = require("node-fetch");
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyDp1LT3pw39OLN5-DFzSbDIkehO9-O2bL0",
  authDomain: "jobboard-dfe79.firebaseapp.com",
  databaseURL: "https://jobboard-dfe79.firebaseio.com",
  projectId: "jobboard-dfe79",
  storageBucket: "jobboard-dfe79.appspot.com",
  messagingSenderId: "417803174373",
  appId: "1:417803174373:web:56a061e570df8408ef6f0c",
  measurementId: "G-3BHPKKH8P5"
});

var database = firebase.database();


const baseUrl = 'https://jobs.github.com/positions.json'

async function fetchGithub() {



  let resultCount = 1, onPage = 0;
  const allJobs = [];

  //fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`)
    const jobs = await res.json();
    allJobs.push(...jobs)
    resultCount = jobs.length
    console.log('got ', resultCount);
    onPage++;
  }
  // filter algo
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    // algo logic
    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect')
    ) {
      return false
    }
    return true;
  })

  console.log('filtered down to', jrJobs.length);


  await database.ref("/jobs").set(JSON.stringify(jrJobs))

  console.log(`got `, allJobs.length, ` Jobs`)


}

fetchGithub();


module.exports = fetchGithub; 