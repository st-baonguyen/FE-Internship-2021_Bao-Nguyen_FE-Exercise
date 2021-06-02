import React from 'react';
import moment from 'moment';
import IBlog from '../interface/IBlog';
import { formatDate } from '../utils/formatDate';
import '../style/style.scss';

const Blog = ({ image, title, category, desc, author, createdAt, minsRead }: IBlog) => (
  <article className="blog flex-center-x">
    <img className="blog-img" src={image} alt={title} />
    <div className="blog-content">
      <p className="blog-category">{category}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{desc}</p>
      <div className="blog-info flex-start-x">
        <p className="blog-author info">
          BY <span className="highlight">{author}</span>
        </p>
        <span className="blog-time info">
          {formatDate(createdAt)}
        </span>
        <span className="blog-mins-read info">
          {minsRead} MINS READ
        </span>
      </div>
    </div>
  </article>
)

export default Blog;
