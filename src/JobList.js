import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the job data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;


