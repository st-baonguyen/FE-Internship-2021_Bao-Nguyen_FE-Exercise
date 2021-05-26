import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './components/index';
import IBlog from './interface/IBlog';
import './style/style.scss'

const App = () => {
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
            <li className="blog-item">
              <Blog key={i} {...blog} />
            </li>
          ))
        }
      </ul>
    </>
  )
}
export default App;
