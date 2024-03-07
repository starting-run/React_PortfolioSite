import React, { Component } from 'react';
import video from '../../images/Pacman/Processing_Pacman.mp4'
import pdf from '../../images/Pacman/Processing_Pacman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faClipboardList, faFileArrowDown, faGear, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

let code1 = `void CreateMap() {
    cols = width / gridSize;
    rows = height / gridSize;
    map = new int[cols][rows];

    //벽 생성 확률 15% && 위 아래 3격자크기만큼 비움.(UI삽입을 위함)
    for (int i = 0; i < cols; i++) {
        for (int j = 0; j < rows; j++) {
            if (i == 0 || i == cols - 1 || j == 3 || j == rows - 3) {
                map[i][j] = 0; //벽
                if (j < 3 || j > rows - 3) {
                    map[i][j] = 1; //길
                }
            } else { 
                if (random(1) < 0.15 && j > 3 && j < rows - 3) {
                map[i][j] = 0; //벽
                } else {
                map[i][j] = 1; //길
                }
            }
        }
    }
}`;

let code2 =`//매개변수 좌표가 맵 안에 있고 벽이 아니라면 true 반환
boolean isCellEmpty(int x, int y) {
    return (x >= 0 && x < cols && y >= 0 && y < rows && map[x][y] == 1);
}`;

let code3 =`/* User Character Object */
class Pacman {
    int x, y;

    Pacman(int x, int y) {
        this.x = x;
        this.y = y;
        photo = loadImage("image/pacman_0.png");
    }
    void move(int xdir, int ydir) {
        int newx = x + xdir;
        int newy = y + ydir;

        // 벽에 부딪치지 않으면 이동
        if (isCellEmpty(newx, newy)) {
            x = newx;
            y = newy;
        }
    }
    void display() {
        image(photo, x * gridSize, y * gridSize, gridSize, gridSize);
    }
}`;
let code4 =`/* Ghost Character Object */
class Ghost {
    int x, y;
    int speed = 2; //고스트 이동속도(낮을수록 빠름)
    int lastMoveFrame;
    int currentDirection;

    Ghost(int x, int y) {
    this.x = x;
    this.y = y;
    lastMoveFrame = frameCount;
    currentDirection = int(random(4));
    }

    void move() {
        if (frameCount - lastMoveFrame > speed) {
            int newx = x;
            int newy = y;
            //객체 생성당시 선택된 방향으로 계속 직진함
            if (currentDirection == 0) {
                newx = x - 1;
            } else if (currentDirection == 1) {
                newx = x + 1;
            } else if (currentDirection == 2) {
                newy = y - 1;
            } else if (currentDirection == 3) {
                newy = y + 1;
            }
            //벽을 만나면 랜덤한 방향을 선택하여 그 방향으로 계속 이동
            if (!isCellEmpty(newx, newy) || newx < 0 || newx >= cols || newy < 0 || newy >= rows) {
                currentDirection = int(random(4));
                return;
            }
            x = newx;
            y = newy;
            lastMoveFrame = frameCount;
        }
    }
    void display() {
        gphoto = loadImage("image/ghost.png");
        image(gphoto, x * gridSize, y * gridSize, gridSize, gridSize);
    }
}`;

let code5 = `/* Item Object */
class Item {
    int x, y;
    int upsize;
    int volume;

    Item(int vol) {
        this.volume = vol;
        while (true) {
            int newx = x;
            int newy = y;
            newx = int(random(1, cols - 1));
            newy = int(random(4, rows - 4));
            if (isCellEmpty(newx, newy)) {
                x = newx;
                y = newy;
                break;
            }
        }
    }
    void display(PImage items, int status, int volume) {
        if (status == 0) {
            image(items, x * gridSize, y * gridSize, gridSize, gridSize);
        } else if (status == 1) { //status = 1이면 먹은 상태이므로 크기를 2배해서 오른쪽 아래에 박제
            image(items, 18 * gridSize + (volume * -85), 23 * gridSize, gridSize * 2, gridSize * 2);      
        }
    }
}`;
class Pacman extends Component {
    render() {
      return (
        <div>
            <Helmet><title>Pacman - USFREE</title></Helmet>
            <div id="projectmain">
                <div class="bg-white-gray">
                    <div class="container-xxl px-4 pt-6">
                    <div class="font-10 text-black fw-normal fs-7"><Link exact to="/">Home</Link> <FontAwesomeIcon icon={faChevronRight}/> <Link exact to="/project">Project</Link> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project/pacman">Detail</NavLink></div>
                        <span class="fs-0-5 fw-bold font-10 text-black font-letter-space-sm">PACMAN GAME</span>
                        <div class="mb-5">
                            <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                            <a href="https://github.com/usfree/Processing_Pacman" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        </div>
                    </div>
                    <div class="container-xxl my-2 mt-3 px-4">
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class="rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-2 proj_text w-100 text-black fw-light">
                                                <div class="mb-3 w-100 card card-cover-nonhover p-3 rounded-4 border-0">
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span class="font-3 fw-light fs-6 mb-2 text-black">2023. 09. - 10.</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span class="font-3 fw-light fs-6 mb-2 text-black">Processing, Java</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span class="font-3 fw-light fs-6 mb-2 text-black">Pacman 게임을 모티브로 제작된 미니게임. 유령 객체를 피해 사용자 객체를 움직여 많은 점수를 기록하는 것이 목표인 게임입니다.</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span class="font-3 fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span class="font-3 fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; 매 게임 생성시마다 랜덤으로 새로운 맵 지형 생성
                                                        <br/>&middot; 매 게임 당 1번만 획득할 수 있는 유니크 아이템을 획득했을 때 우측 하단에 박제하는 기능
                                                        <br/>&middot; 사용자 객체가 유령 객체에 충돌하였을 때 게임오버 UI를 표출하는 기능
                                                    </span>
                                                </div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div class="mb-4 px-2">인터랙티브 프로그래밍에 흔히 사용되는 Processing을 통해 제작된 게임입니다. 완성도 있는 구현을 위해 기존의 팩맨 게임 원작과는 게임 진행 방식에 약간의 수정을 가미하였습니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div class="mb-4 px-2">인터랙티브 프로그래밍을 위해 사용되는 Tool인 만큼, 가장 인터랙티브한 프로그래밍은 게임이라고 생각했습니다. 상호작용이 가장 많고 상호작용을 통해 게임을 활성화시킬 수 있기 때문입니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div class="code p-3 rounded-4 border-0 mb-5">
                                                    # 저작권 침해 소지로 인해 빌드 파일은 업로드하지 않습니다.<br/>
                                                    <a href="https://github.com/processing/processing4/releases/download/processing-1293-4.3/processing-4.3-windows-x64.zip"><b>Processing.exe 설치 <span class="highlight">[다운로드]</span></b></a> → Pacman_Game.pde → 실행
                                                </div>
                                                <hr/>
                                                <div class="font-5 fs-2 fw-bold"><b>Map Create</b></div>
                                                <div class="code mb-2">{code1}</div>
                                                <p class="mb-5">Item 객체입니다. Item은 매 판당 1번만 생성되며, 아이템을 획득하면 오른쪽 아래에 박제됩니다.
                                                <br/>맵을 생성하는 함수입니다. 랜덤한 확률로 벽을 생성하며, 랜덤으로 생성한 벽 요소를 2차원 배열에 저장합니다.</p>
                                                
                                                <div class="font-5 fs-2 fw-bold"><b>Collision Detection</b></div>
                                                <div class="code mb-2"> {code2} </div>
                                                <p class="mb-5">객체가 벽에 충돌하는지 판정하는 함수입니다. 객체의 매 이동 순간마다 매개변수로 현재 위치를 전달하여 CreateMap으로 생성된 2차원 배열에서 벽인지 판단합니다.</p>  

                                                <div class="font-5 fs-2 fw-bold"><b>Object</b></div>
                                                <h6>4개의 객체 요소를 포함합니다.</h6>
                                                <div class="code mb-2"> {code3} </div>
                                                <p class="mb-5">사용자가 컨트롤하는 객체입니다. 사용자가 입력한 키보드 방향에 따라 다른 방향의 이미지를 불러옵니다.</p>
                                                <div class="code mb-2"> {code4} </div>
                                                <p class="mb-5">Ghost 객체입니다. 게임 내에서 랜덤한 방향을 정해 해당 방향으로 벽을 만날 때 까지 진행한 후, 벽을 만나면 새롭게 진행할 방향을 설정합니다.</p>
                                                <div class="code mb-2"> {code5} </div>
                                                <p class="mb-5">Item 객체입니다. Item은 매 판당 1번만 생성되며, 아이템을 획득하면 오른쪽 아래에 박제됩니다.</p>

                                                <div class="font-5 fs-2 fw-bold"><b>Result</b></div>
                                                <video src={video} controls controlsList="nodownload" style={{width: '400px', height: '500px;'}}></video><br/><br/>
                                                <div class="font-5 fs-2 fw-bold"><b>Presentation</b></div>
                                                <p><iframe style={{width:'100%', height:'700px'}} src={pdf}></iframe></p>
                                                <span>브라우저에서 PDF viewer를 지원하지 않을 경우 <a href="http://usfree.site/static/media/Processing_Pacman.32a699ec1c28427c6233.pdf"><div class="btn btn-primary-round-outline px-4 fs-7"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-5">
                        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3 mb-5"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Pacman;