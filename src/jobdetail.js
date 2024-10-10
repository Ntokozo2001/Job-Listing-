import React, { useState } from 'react';
import './jobdetail.css'; 

const JobDetail = () => {
    const [applicantsCount, setApplicantsCount] = useState(0); // State to track number of applicants
    const [payRate] = useState("R50,000 - R70,000 per month"); // State for pay rate

    const handleApply = () => {
        alert("Application submitted!");
        setApplicantsCount(applicantsCount + 1); // Increment applicants count
    };

    return (
        <div className="job-detail">  
            <h1 className="job-title">Software Engineer</h1>
            <p className="company-name">Tech Solutions Inc.</p>
            <p className="location">Location: Pretoria, SA</p>
            <p className="position-type">Position Type: Permanent</p>
            <p className="pay-rate">Pay Rate: {payRate}</p> {/* Display pay rate */}

            <h2>About This Role</h2>
            <p>
                We are looking for a passionate Software Engineer to join our team. You will be responsible for developing high-quality software solutions and collaborating with cross-functional teams to define, design, and ship new features.
            </p>

            <h2>Responsibilities</h2>
            <ul>
                <li>Design, develop, and maintain software applications.</li>
                <li>Collaborate with product managers and designers to implement new features.</li>
                <li>Troubleshoot and debug applications.</li>
                <li>Write clean, maintainable code and documentation.</li>
                <li>Participate in code reviews and contribute to team knowledge sharing.</li>
            </ul>

            <h2>Qualifications</h2>
            <ul>
                <li>Bachelor’s degree in Computer Science or a related field.</li>
                <li>2+ years of experience in software development.</li>
                <li>Proficiency in JavaScript, React, and Node.js.</li>
                <li>Strong problem-solving skills and attention to detail.</li>
                <li>Excellent communication and teamwork abilities.</li>
            </ul>

            <h2>Number of Applicants</h2>
            <p>{applicantsCount} applicant(s) have applied for this position.</p>

            <h2>Position Type</h2>
            <ul>
                <li>Permanent</li>
            </ul>
            <button className="apply-button" onClick={handleApply}>Apply Now</button>
        </div>
    );
};

export default JobDetail;
