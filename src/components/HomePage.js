import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Find Your Next Job</h1>
        <div className="search-bar">
          <input type="text" placeholder="Keyword" />
          <input type="text" placeholder="Location" />
          <select>
            <option value="any">Any Category</option>
          </select>
          <button>Search</button>
        </div>
      </header>

      <section className="latest-jobs">
        <h2>Latest Jobs</h2>
        {/* Render some sample featured jobs here */}
        <div className="job-list">
          <div className="job-item">Xerox - Android Developer</div>
          <div className="job-item">Oracle - Android Developer</div>
          <div className="job-item">Deloitte - Android Developer</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
