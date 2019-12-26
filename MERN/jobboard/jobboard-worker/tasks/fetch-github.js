var fetch = require("node-fetch");

const baseUrl = 'https://jobs.github.com/positions.json'

async function fetchGithub() {



  let resultCount = 1, onPage = 0;
  const allJobs = [];


  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`)
    const jobs = await res.json();
    allJobs.push(...jobs)
    resultCount = jobs.length
    console.log('got ', resultCount);
    onPage++;
  }

  console.log(`got `, allJobs.length, ` Jobs`)
}

fetchGithub();

module.exports = fetchGithub;