import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const VelogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchVelogPosts = async (username) => {
        try {
          const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://velog.io/@${username}`);
          const html = response.data;
          const $ = cheerio.load(html);
  
          const posts = [];
          $('.sc-fznWqX h2').each((index, element) => {
            const title = $(element).text();
            const thumbnail = $(element).closest('a').find('img').attr('src');
            posts.push({ title, thumbnail });
          });
  
          setPosts(posts);
        } catch (error) {
          console.error('Error fetching Velog posts:', error);
        }
      };
  
      fetchVelogPosts('usfree'); // 여기서 'username'을 원하는 Velog 유저 이름으로 변경
    }, []);
  
    return (
      <div>
        <h1>Velog Posts</h1>
        <div>
          {posts.map((post, index) => (
            <div key={index} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <h2>{post.title}</h2>
              {post.thumbnail && <img src={post.thumbnail} alt={post.title} style={{ width: '100%' }} />}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default VelogPosts;
