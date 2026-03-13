import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of software development services, including mobile app development (Android/iOS), web development, e-commerce solutions, and UI/UX design.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex mobile application could take 3-6 months. We provide detailed timelines after the discovery phase.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your software remains secure, updated, and performs optimally after launch.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We use agile methodologies and tools like Slack, Jira, and weekly video calls to keep you informed about every step of the development process.',
    },
  ];

  return (
    <section id="faq">
      <style>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          margin-bottom: 1rem;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--gray-100);
          transition: all 0.3s ease;
        }
        .faq-item.active {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }
        .faq-question {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          text-align: left;
          font-weight: 600;
          font-size: 1.125rem;
          color: var(--black);
        }
        .faq-answer {
          padding: 0 2rem 1.5rem;
          background: white;
          color: var(--gray-600);
          line-height: 1.6;
          display: none;
        }
        .faq-item.active .faq-answer {
          display: block;
        }
        .icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-600);
          transition: all 0.3s ease;
        }
        .faq-item.active .icon-circle {
          background: var(--primary);
          color: white;
          transform: rotate(180deg);
        }
      `}</style>

      <h2 className="section-title">Frequently Asked <span className="accent-text">Questions</span></h2>
      <p className="section-subtitle">
        Find answers to common questions about our services and development process.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>
              {faq.question}
              <div className="icon-circle">
                <ChevronDown size={18} />
              </div>
            </button>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
