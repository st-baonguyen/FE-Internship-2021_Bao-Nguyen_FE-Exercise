import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';
import IBlog from '../interface/IBlog';
import { urlAPI } from '../constants/api'
import Loading from './Loading';

import '../style/style.scss'

const BlogList = () => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${urlAPI}/articles`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <>
      {
        !loading ? (
          <ul className="blog-group">
            {
              data && data.map((blog: IBlog) => (
                <li className="blog-item" key={blog.id}>
                  <Blog  {...blog} />
                </li>
              ))
            }
          </ul>
        ) :
          (
            <Loading />
          )
      }
    </>
  )
}

export default BlogList;
