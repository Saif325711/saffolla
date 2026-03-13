import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fintech Mobile App',
      category: 'Mobile Development',
      image: '/assets/images/project1.png',
    },
    {
      title: 'Fashion E-commerce',
      category: 'Web Development',
      image: '/assets/images/project2.png',
    },
    {
      title: 'Enterprise SaaS Dashboard',
      category: 'UI/UX Design',
      image: '/assets/images/project3.png',
    },
  ];

  return (
    <section id="projects">
      <style>{`
        .project-card {
          position: relative;
          padding: 0;
          overflow: hidden;
          border-radius: var(--radius-2xl);
          border: none;
        }
        .project-img-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-card:hover .project-img {
          transform: scale(1.1);
        }
        .project-info h3 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .project-info p {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .view-project {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 45px;
          height: 45px;
          background: white;
          color: var(--black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .project-card:hover .view-project {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

      <h2 className="section-title">Our <span className="accent-text">Portfolio</span></h2>
      <p className="section-subtitle">
        A glimpse into some of the successful projects we have delivered for our clients across the globe.
      </p>

      <div className="grid-3">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="project-info">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="view-project">
                <ExternalLink size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex-center" style={{ marginTop: '4rem' }}>
        <button className="btn btn-outline">View All Projects</button>
      </div>
    </section>
  );
};

export default Projects;
