import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import css from './Home.module.css';

const Home = () => {
  // Hero Carousel data and logic
  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Connecting Healthcare Needs',
      description: 'Join NexMed today to bridge the gap between medicine donors and those in need. Together we can make healthcare accessible to all.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Donate Unused Medicines',
      description: 'Your unused medicines can save lives. Join our platform to donate medicines responsibly and help those who can\'t afford them.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'AI-Powered Healthcare Assistant',
      description: 'Get instant help with our AI Assistant for medicine information, dosage guidance, and healthcare advice.',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => 
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Articles data
  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Donation Guide',
      title: 'How to Responsibly Donate Unused Medicines',
      description: 'Learn the proper way to donate your unused medications to ensure they help those in need while maintaining safety standards.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80',
      category: 'Community Impact',
      title: 'Bridging the Healthcare Gap in Underserved Areas',
      description: 'Discover how medicine donation programs are making healthcare more accessible to communities in need.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Technology',
      title: 'How AI is Revolutionizing Medicine Distribution',
      description: 'Explore how artificial intelligence helps match donated medicines with those who need them most efficiently.',
    }
  ];

  // ArticleCard component
  const ArticleCard = ({ article }) => {
    return (
      <article className={css.articleCard}>
        <div className={css.articleImage}>
          <img src={article.image} alt={article.title} />
        </div>
        <div className={css.articleContent}>
          <span className={css.articleCategory}>{article.category}</span>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href="#" className={css.readMore}>
            Read More <FaArrowRight />
          </a>
        </div>
      </article>
    );
  };

  return (
    <div className={css.homeContainer}>
      {/* Hero Carousel Section */}
      <section className={css.hero}>
        <div 
          className={css.carousel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={css.carouselInner}>
            {carouselItems.map((item, index) => (
              <div 
                key={item.id}
                className={`${css.carouselItem} ${index === currentIndex ? css.active : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={css.carouselContent}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button className={css.signUpBtn}>
                    SIGN UP <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <ul className={css.carouselIndicators}>
            {carouselItems.map((_, index) => (
              <li 
                key={index}
                className={index === currentIndex ? css.active : ''}
                onClick={() => goToSlide(index)}
              ></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Articles Section */}
      <section className={css.articlesSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Latest Health Insights</h2>
          <p className={css.sectionSubtitle}>Discover valuable information about medicine donation and healthcare</p>
          
          <div className={css.articlesGrid}>
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className={css.ctaBox}>
            <h3>Want to contribute to our health blog?</h3>
            <p>Share your expertise and help educate others about responsible medicine use and donation.</p>
            <button className={css.ctaButton}>Become a Contributor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;