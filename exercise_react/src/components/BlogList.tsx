
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';
import IBlog from '../interface/IBlog';
import { urlAPI } from '../constants/api'
import { Link } from 'react-router-dom';
import LoadData from '../common/LoadData';

const BlogList = () => {
  const [data, setData] = useState<any>(undefined);
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
  }, []);

  console.log('data list', data)
  const BlogListRender = (props: any) => {
    return (
      <ul className="blog-group">
        {
          props?.data && props.data.map((blog: IBlog) => (
            <li className="blog-item" key={blog.id}>
              <Link to={`/${blog.id}`}>
                <Blog {...blog} />
              </Link>
            </li>
          ))
        }
      </ul>
    )
  };

  const LoadBlogList = LoadData(BlogListRender);

  return <LoadBlogList data={data} />
}

export default BlogList;
