import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../style/style.scss';
import { urlAPI } from '../constants/api';
import { useParams } from 'react-router';
import Loading from './Loading';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${urlAPI}/${id}`,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      {
        !loading ? (
          data &&
          <div className="blog-detail">
            <div className="blog">
              <h3 className="blog-title">{data.title}</h3>
              <p className="blog-category">{data.category}</p>
              <div className="blog-info">
                <p className="blog-author info">
                  BY <span className="highlight">{data.author}</span>
                </p>
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
        ) :
          (
            <Loading />
          )
      }
    </>
  )
}
export default BlogDetail;
