import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../style/style.scss';
import { useParams } from 'react-router';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://6088e20da6f4a300174271e7.mockapi.io/articles/${id}`);
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {data &&
        <div className="blog-detail">
          <div className="blog">
            <h3 className="blog-title">{data.title}</h3>
            <p className="blog-category">{data.category}</p>
            <div className="blog-info">
              <div className="blog-author info">
                BY <span className="hight-light">{data.author}</span>
              </div>
              <span className="blog-time info">
                {moment(data.createdAt).format('dddd, MMMM Do YYYY')}
              </span>
              <span className="blog-mins-read info">
                {data.minsRead} mins read
              </span>
            </div>
            <img className="blog-img" src={data.image} alt={data.title} />
            <p className="blog-description">{data.desc}</p>
          </div>
        </div>
      }
    </>
  )
}
export default PostDetail;
