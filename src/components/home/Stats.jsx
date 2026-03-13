import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '250+' },
    { label: 'Happy Clients', value: '180+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Team Members', value: '25+' },
  ];

  return (
    <section className="bg-dark-section">
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .stat-item h2 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to bottom, #fff, var(--gray-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-item p {
          font-size: 1.125rem;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
      `}</style>

      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
