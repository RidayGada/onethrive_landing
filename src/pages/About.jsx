import React from 'react';

const About = () => {
  return (
    <section id="about" className="page-section">
      <h1>What We Offer</h1>
      <p>We curate interactive sessions that build trust, improve communication, and foster collaboration.</p>
      <div className="services-grid">
        <div className="service-card">
          <img src="https://source.unsplash.com/200x150/?team,building" alt="Activity 1" />
          <h3>Outdoor Retreats</h3>
          <p>Boost morale with off-site adventures, obstacle courses, and trust-building games.</p>
        </div>
        <div className="service-card">
          <img src="https://source.unsplash.com/200x150/?corporate,event" alt="Activity 2" />
          <h3>Workshops</h3>
          <p>Interactive problem-solving, creativity boosts, and leadership challenges.</p>
        </div>
        <div className="service-card">
          <img src="https://source.unsplash.com/200x150/?collaboration,office" alt="Activity 3" />
          <h3>Virtual Games</h3>
          <p>Fun, remote-friendly activities that connect teams across geographies.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
