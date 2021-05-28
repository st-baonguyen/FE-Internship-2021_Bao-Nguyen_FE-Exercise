import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';
import IBlog from '../interface/IBlog';
import { urlAPI } from '../constants/api'
import '../style/style.scss'

const BlogList = () => {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    axios({
      method: 'GET',
      url: urlAPI,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <ul className="blog-group">
      {
        data && data.map((blog: IBlog) => (
          <li className="blog-item" key={blog.id}>
            <Blog  {...blog} />
          </li>
        ))
      }
    </ul>
  )
}

export default BlogList;
