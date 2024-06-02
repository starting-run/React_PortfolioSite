
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home_5() {
  const [posts, setPosts] = useState([]);
  let currentIndex = 0;

  const corsProxies = [
    'https://cors-anywhere.herokuapp.com/',
    'https://thingproxy.freeboard.io/fetch/',
    //프록시추가가능
  ];

  const nextProxy = () => {
    currentIndex = (currentIndex + 1) % corsProxies.length;
    return corsProxies[currentIndex];
  };

  useEffect(() => {
    fetch(nextProxy() + 'https://api.velog.io/rss/@usfree')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        const postsArray = Array.from(items).map(item => {
          const description = item.querySelector('description').textContent;
          // Create a temporary DOM element to parse HTML
          const tempElement = document.createElement('div');
          tempElement.innerHTML = description;
          const cleanDescription = tempElement.textContent || tempElement.innerText || '';

          return {
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: cleanDescription,
            pubDate: item.querySelector('pubDate').textContent,
          };
        });
        setPosts(postsArray);
      })
      .catch(error => console.error('Error fetching the RSS feed:', error));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="Home_5">
      <div className="container-xxl px-4 pt-6" id="seemore">
          <div className="row gx-5 justify-content-center">
            <div className="d-flex justify-content-between">
              <div className="mb-3 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">최신 블로그 글</div>
              <a href="https://velog.io/@usfree/posts" target='_blank'><div className="mt-3 fs-5 font-11 fw-normal font-letter-space-sm text-uppercase">더보기 <FontAwesomeIcon icon={faCircleArrowRight}/></div></a>
            </div>
              <ul>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 cards">
                  {posts.map((post, index) => {
                    const formattedDate = format(new Date(post.pubDate), 'yyyy. MM. dd.');
                    const truncatedTitle = truncateText(post.title, 25);
                    const truncatedDescription = truncateText(post.description, 85);

                    return (
                      <div className='img-fluid'>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          <li key={index} className='col text-start mb-3'>
                            <div className="card card-cover card-border-0 rounded-4 p-4">
                                <div className="font-11 fs-4 mb-1 fw-bold text-black">{truncatedTitle}</div>
                              <div className="mb-4 font-11 fs-8 text-black">{formattedDate}</div>
                              <div className="font-11 fs-6 text-black">{truncatedDescription}</div>
                            </div>
                          </li>
                        </a>
                      </div>
                    );

                })}
                </div>
              </ul>
          </div>

      </div>



    </div>
  );
}

export default Home_5;
