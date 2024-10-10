import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/jobs/${id}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the job details!', error);
      });
  }, [id]);

  return (
    <div>
      {job ? (
        <div>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
          <p>{job.company}</p>
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetail;
