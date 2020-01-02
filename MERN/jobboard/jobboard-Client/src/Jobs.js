import React from 'react'
import { Typography } from '@material-ui/core';
import Job from './Job';



function Jobs({ jobsList }) {

  console.log(jobsList)
  return (
    <div className='jobs'>
      <Typography variant="h1">
        Entry level Software Jobs
      </Typography>
      {
        (jobsList !== undefined) ? (
          jobsList.map(job =>
            <Job job={job} key={job.title} />
          )
        ) : (<div>
          Loading...
        </div>)

      }
    </div>
  )
}

export default Jobs
