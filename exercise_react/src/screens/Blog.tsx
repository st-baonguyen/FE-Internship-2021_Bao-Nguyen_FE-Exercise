import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import IBlog from '../interface/IBlog';
import '../style/style.scss'
import { Link, Route, Router, Switch } from 'react-router-dom';

const Blog = () => {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://6088e20da6f4a300174271e7.mockapi.io/articles');
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <ul className="blog-group">
        {
          data && data.map((blog: IBlog, i: number) => (
            <li className="blog-item" key={blog.id}>
              <Link to={`/${blog.id}`}>
                <Post {...blog} />
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Blog;
