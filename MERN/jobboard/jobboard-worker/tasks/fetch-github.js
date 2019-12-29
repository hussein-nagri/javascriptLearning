var fetch = require("node-fetch");

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




  console.log(`got `, allJobs.length, ` Jobs`)


}

fetchGithub();

module.exports = fetchGithub; 