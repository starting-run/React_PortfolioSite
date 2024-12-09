/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Blog_Parse() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가
  let currentIndex = 0;

  const corsProxies = [
    'https://corsproxy.io/?',
    'https://vercel-cors-proxy-puce.vercel.app/?url=',
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
        let  postsArray = Array.from(items).map(item => {
          const description = item.querySelector('description').textContent;
          // Create a temporary DOM element to parse HTML
          const tempElement = document.createElement('div');
          tempElement.innerHTML = description;
          const firstImage = tempElement.querySelector('img');
          const imageUrl = firstImage ? firstImage.getAttribute('src') : null;
          const cleanDescription = tempElement.textContent || tempElement.innerText || '';

          return {
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: cleanDescription,
            imageUrl: imageUrl,
            pubDate: item.querySelector('pubDate').textContent,
          };
        });
        postsArray = postsArray.sort((a, b) => b.pubDate - a.pubDate).slice(0, 6); //글 목록 최대 6개까지 출력

        setPosts(postsArray);
        setLoading(false);  // 데이터 로드 완료 후 로딩 상태 false로 설정
      })
      .catch(error => {
        console.error('Error fetching the RSS feed:', error);
        setLoading(true);  // 에러 발생 시에도 로딩 true
      });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="Home_5">
      <div className="row gx-5 justify-content-center">
        <div className='mb-5'>
            {loading ? (  // 로딩 상태일 때 로딩 메시지 표시
            <div className="font-11 text-black fs-5 justify-content-center d-grid pt-7">
              <div className="justify-content-center d-flex mb-3">
                <div class="ui-loader loader-blk">
                    <svg viewBox="22 22 44 44" class="multiColor-loader">
                        <circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6" class="loader-circle loader-circle-animation"></circle>
                    </svg>
                </div>
              </div>
              <span className="text-center mt-2">글 목록을 불러오는 중입니다.<br/>잠시만 기다려주세요.</span>
              </div>
          ) : (
            <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 cards">
              {posts.map((post, index) => {
                const formattedDate = format(new Date(post.pubDate), 'yyyy. MM. dd.');
                const truncatedTitle = truncateText(post.title, 20);
                const truncatedDescription = truncateText(post.description, 100);

                return (
                  <div>
                    <div className="col">
                      <a href={post.link}>
                          <div key={index} className="img-fluid"> 
                              <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                  <div className="row row-cols-lg-1">
                                      <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                          <div className="country mb-3 fs-2 lh-1 fw-bold2 font-11 mx-3 project-title text-black">{truncatedTitle}</div>
                                          <div className='mx-3 fs-6'><span className="text-black">{truncatedDescription}</span></div>
                                          <ul className="list-unstyled mt-auto small2">
                                              <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-3">
                                                  <span className="fs-7">{formattedDate}</span>
                                              </li>
                                              <li className="d-flex align-items-center mt-5 city">
                                                  <span className="text-end fs-4 card-in-arrow-left">
                                                      <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-blank'/>
                                                  </span>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className='col-lg-5 order-lg-2 order-1'>
                                          <div className='card card-border-0 rounded-4 mb-3'>
                                          {post.imageUrl && <img className="card-image-main" src ={post.imageUrl} alt="Post thumbnail" ></img>}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  {index !== posts.length - 1 && <hr className='text-black hr-w2' />}
                </div>
                 
                //  <div className='img-fluid'>
                //   <div className="card card-cover card-border-0 rounded-4 p-4 pb-2">
                //     <a href={post.link} target="_blank" rel="noopener noreferrer" className='text-black'>
                //       <li key={index} className='col text-start mb-3'>
                //         {post.imageUrl && <img src={post.imageUrl} alt="Post thumbnail" className='mb-3' style={{height: '225px', width: '100%'}}/>}
                //             <span className="font-11 fs-4 mb-1 fw-bold">{truncatedTitle}</span>
                //           <div className='mb-4'><span className="mb-4 font-11 fs-8">{formattedDate}</span></div>
                //           <div><span className="font-11 fs-6">{truncatedDescription}</span></div>
                //       </li>
                //     </a>
                //   </div>
                // </div>

                );
            })}
            </div>

          )}
        </div>
      </div>
    </div>
  );
}

export default Blog_Parse;
