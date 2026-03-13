import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import profileImg from '../../assets/images/profile.png';

const Team = () => {
  const members = [
    {
      name: 'Saiful Islam',
      role: 'CEO & Founder',
      image: profileImg,
    },
    {
      name: 'David Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      name: 'Emily Williams',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      name: 'Michael Smith',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    },
  ];

  return (
    <section id="team">
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .team-card {
          text-align: center;
          padding: 1.5rem;
          border: 1px solid var(--gray-100);
        }
        .team-img-wrapper {
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--gray-50);
          transition: border-color 0.3s ease;
        }
        .team-card:hover .team-img-wrapper {
          border-color: var(--primary);
        }
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .team-card p {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .team-social {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .team-social-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--gray-50);
          color: var(--gray-600);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .team-social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
        }
      `}</style>

      <h2 className="section-title">Meet Our <span className="accent-text">Team</span></h2>
      <p className="section-subtitle">
        The creative minds and technical experts behind our successful projects.
      </p>

      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="card team-card">
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-social">
              <a href="#" className="team-social-icon"><Linkedin size={16} /></a>
              <a href="#" className="team-social-icon"><Twitter size={16} /></a>
              <a href="#" className="team-social-icon"><Mail size={16} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
