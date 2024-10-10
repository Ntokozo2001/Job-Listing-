import React, { useState } from 'react';
import axios from 'axios';

const AddJob = () => {
  const [job, setJob] = useState({ title: '', description: '', company: '' });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/api/jobs', job)
      .then(response => {
        alert('Job added successfully');
        setJob({ title: '', description: '', company: '' });
      })
      .catch(error => {
        console.error('There was an error adding the job!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input type="text" name="title" value={job.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={job.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Company:
        <input type="text" name="company" value={job.company} onChange={handleChange} />
      </label>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJob;
