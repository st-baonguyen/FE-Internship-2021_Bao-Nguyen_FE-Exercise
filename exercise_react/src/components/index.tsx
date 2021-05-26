import React from 'react';
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
          {createdAt}
        </span>
        <span className="blog-mins-read info">
          {minsRead} MINS READ
        </span>
      </div>
    </div>
  </div>
)

// const Blog = () => (
//   <div className="blog">
//     <img className="blog-img" src="https://picsum.photos/180/180" alt='' />
//     <div className="blog-content">
//       <p className="blog-category">HEALTHY</p>
//       <h3 className="blog-title">AstraZeneca cam kết đảm bảo cung ứng vaccine Covid-19 cho Việt Nam</h3>
//       <p className="blog-description">AstraZeneca đang tập trung nguồn lực vào các chuỗi cung ứng và đối tác
//       sẵn có để sản xuất vaccine Covid-19,
//       dự kiến đến đầu năm 2022 bàn giao đủ số lượng đã cam kết cho Việt Nam.  dự kiến đến đầu năm 2022 bàn giao đủ số lượng đã cam kết cho Việt Nam.</p>
//       <div className="blog-info">
//         <div className="blog-author info">
//           BY <span className="hight-light">Lan Hương</span>
//         </div>
//         <span className="blog-time info">
//           20/10/2020 - STC
//         </span>
//         <span className="blog-mins-read info">
//           12 MINS READ
//           </span>
//       </div>
//     </div>
//   </div>
// )

export default Blog;
