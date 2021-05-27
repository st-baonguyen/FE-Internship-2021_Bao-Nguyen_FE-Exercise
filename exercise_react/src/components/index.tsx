import React from 'react';
import moment from 'moment';
import IBlog from '../interface/IBlog';
import '../style/style.scss';

const Blog = ({ image, title, category, desc, author, createdAt, minsRead }: IBlog) => (
  <div className="blog">
    <img className="blog-img" src={image} alt={title} />
    <div className="blog-content">
      <p className="blog-category">{category}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{desc}</p>
      <div className="blog-info">
        <div className="blog-author info">
          BY <span className="hight-light">{author}</span>
        </div>
        <span className="blog-time info">
          {moment(createdAt).format('dddd, MMMM Do YYYY')}
        </span>
        <span className="blog-mins-read info">
          {minsRead} MINS READ
        </span>
      </div>
    </div>
  </div>
)

export default Blog;
