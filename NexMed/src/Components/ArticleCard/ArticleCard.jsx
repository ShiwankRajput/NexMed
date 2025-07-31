import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import css from './ArticleCard.module.css';

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

export default ArticleCard;