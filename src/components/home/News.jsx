import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const posts = [
    {
      title: 'The Future of Mobile App Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the mobile landscape...',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Why React is Still the King of Frontend Frameworks',
      excerpt: 'A deep dive into why developers and businesses prefer React for web projects...',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Successful Launch of Fintech Partner Program',
      excerpt: 'We are excited to announce our new partnership program for fintech startups...',
      date: 'March 05, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="news" style={{ background: 'var(--gray-50)' }}>
      <style>{`
        .news-card {
          padding: 0;
          overflow: hidden;
          background: white;
        }
        .news-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .news-content {
          padding: 2rem;
        }
        .news-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray-500);
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .news-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .news-card:hover h3 {
          color: var(--primary);
        }
        .news-card p {
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--black);
          font-size: 0.9rem;
        }
        .read-more:hover {
          color: var(--primary);
          gap: 0.75rem;
        }
      `}</style>

      <h2 className="section-title">Latest <span className="accent-text">News</span></h2>
      <p className="section-subtitle">
        Stay updated with the latest trends in technology and our company updates.
      </p>

      <div className="grid-3">
        {posts.map((post, index) => (
          <div key={index} className="card news-card">
            <img src={post.image} alt={post.title} className="news-img" />
            <div className="news-content">
              <div className="news-date">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
