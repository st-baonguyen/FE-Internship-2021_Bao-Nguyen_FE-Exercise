import React, { useEffect, useState } from "react";
import axios from "axios";
import { urlAPI } from "../constants/api";
import { useParams } from "react-router";
import { formatDate, formatDateJs } from "../utils/formatDate";
import LoadData from "../common/LoadData";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${urlAPI}/articles/${id}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  const BlogDetailRender = (props: any) => {
    console.log('props detail', props)
    return (
      <>
        <div className="blog-detail">
          <div className="blog">
            <h3 className="blog-title">{data.title}</h3>
            <p className="blog-category">{data.category}</p>
            <div className="blog-info">
              <p className="blog-author info">
                BY <span className="highlight">{data.author}</span>
              </p>
              <span className="blog-time info">
                {formatDateJs(data.createdAt)}
              </span>
              <span className="blog-mins-read info">
                {data.minsRead} mins read
                </span>
            </div>
            <img className="blog-img" src={data.image} alt={data.title} />
            <p className="blog-description">{data.desc}</p>
          </div>
        </div>
      </>
    );
  };

  const LoadBlogDetail = LoadData(BlogDetailRender);

  return <LoadBlogDetail data={data} />
};

export default BlogDetail;
