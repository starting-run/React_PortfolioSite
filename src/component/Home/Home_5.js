
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home_5() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가
  let currentIndex = 0;

  const corsProxies = [
    'https://thingproxy.freeboard.io/fetch/',
    //'https://thingproxy.freeboard.io/fetch/', //localhost용
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
      <div className="container-xxl px-4 pt-6" id="seemore">
          <div className="row gx-5 justify-content-center">
            <div className="d-flex justify-content-between">
              <div className="mb-3 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">최신 블로그 글</div>
              <a href="https://velog.io/@usfree/posts" target='_blank'><div className="mt-3 fs-5 font-11 fw-normal font-letter-space-sm text-uppercase">더보기 <FontAwesomeIcon icon={faCircleArrowRight}/></div></a>
            </div>
                {loading ? (  // 로딩 상태일 때 로딩 메시지 표시
                <div class="font-11 text-black fs-5 justify-content-center d-grid">
                  <div class="justify-content-center d-flex mb-3">
                    <div class="ld-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  글 목록을 불러오는 중입니다. Proxy 접속 한계를 초과했을 시에는 출력되지 않습니다.
                  </div>
              ) : (
              <ul>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 cards">
                  {posts.map((post, index) => {
                    const formattedDate = format(new Date(post.pubDate), 'yyyy. MM. dd.');
                    const truncatedTitle = truncateText(post.title, 25);
                    const truncatedDescription = truncateText(post.description, 80);

                    return (
                      <div className='img-fluid'>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          <li key={index} className='col text-start mb-3'>
                            <div className="card card-cover card-border-0 rounded-4 p-4">
                            {post.imageUrl && <img src={post.imageUrl} alt="Post thumbnail" className='mb-3' style={{height: '225px'}}/>}
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
              )}
          </div>
              
      </div>


              
    </div>
  );
}

export default Home_5;
