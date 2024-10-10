import React from 'react';
import { Link } from 'react-router-dom';

function JobList() {
  // Dummy array of job objects to represent the job listings
  const jobs = [
    {
      id: 1,
      name: 'Software Engineer',
      datePosted: '2024-09-30',
      positionType: 'Full-Time',
      salary: '$120,000',//Change
    },
    {
      id: 2,
      name: 'Data Scientist',
      datePosted: '2024-09-29',
      positionType: 'Remote',
      salary: '$110,000',//Change
    },
   
    // Add more job objects as needed
  ];

  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <table>
        <thead>
          <tr>
            <th>Job Name</th>
            <th>Date Posted</th>
            <th>Position Type</th>
            <th>Salary</th>
            <th>Job Details</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.name}</td>
              <td>{job.datePosted}</td>
              <td>{job.positionType}</td>
              <td>{job.salary}</td>
              <td><Link to={`/job/${job.id}`}>View Job Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobList;

