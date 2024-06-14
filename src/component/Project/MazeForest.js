import React, {useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faDownload, faFileArrowDown, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import video from '../../images/Unity/MazeForest/video.mp4'
import pdf from '../../images/Unity/MazeForest/Unity_MazeForest.pdf';
import logo from '../../images/Unity/MazeForest/logo.png';
import img1 from '../../images/Unity/MazeForest/img1.png';
import img2 from '../../images/Unity/MazeForest/img2.png';
import img3 from '../../images/Unity/MazeForest/img3.png';
import img4 from '../../images/Unity/MazeForest/img4.png';
import img5 from '../../images/Unity/MazeForest/img5.png';
import img6 from '../../images/Unity/MazeForest/img6.png';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useRef } from 'react';
import CodeBox from '../Function/CodeBox';
import { motion } from 'framer-motion';

let code1 = `private IEnumerator PlayVideo(string[] tokens)
    {
        string clip = tokens[1];
        front.enabled = false;
        dialog.enabled = false;
        video.enabled = true;
        player.clip = Resources.Load<VideoClip>(clip);
        float len = (float)player.clip.length;
        player.Play();
        yield return new WaitForSeconds(len);
    }

    private IEnumerator DisplayText(string[] tokens)
    {
        text.enabled = true;
        text.text = tokens[1];
        yield return new WaitForSeconds(float.Parse(tokens[2] == "" ? "0" : tokens[2]));
    }

    private IEnumerator DisplayImage(string[] tokens)
    {
        front.enabled = true;
        //video.enabled = false;
        dialog.enabled = false;
        front.sprite = Resources.Load<Sprite>(tokens[1]);
        yield return new WaitForSeconds(float.Parse(tokens[2] == "" ? "0" : tokens[2]));
    }

    private IEnumerator Wait(string[] tokens)
    {
        yield return new WaitForSeconds(float.Parse(tokens[1] == "" ? "2" : tokens[1]));
    }

    private IEnumerator DisplayDialog(string[] tokens)
    {
        dialog.enabled = true;
        front.enabled = false;
        //video.enabled = false;
        dialog.transform.Find("Question_Image").GetComponent<Image>().enabled = false;
        string ch = tokens[1];
        string text = tokens[2];
        if (ch != "null")
        {
            dialog.transform.Find("Image").GetComponent<Image>().enabled = true;
            dialog.transform.Find("Image").GetComponent<Image>().sprite = Resources.Load<Sprite>(ch);
            dialog.transform.Find("Text").GetComponent<TextMeshProUGUI>().text = text;
            dialog.transform.Find("Text_Center").GetComponent<TextMeshProUGUI>().text = "";
        }
        else
        {
            dialog.transform.Find("Image").GetComponent<Image>().enabled = false;
            dialog.transform.Find("Text_Center").GetComponent<TextMeshProUGUI>().text = text;
            dialog.transform.Find("Text").GetComponent<TextMeshProUGUI>().text = "";
        }
        yield return new WaitForSeconds(float.Parse(tokens[3] == "" ? "0" : tokens[3]));
    }

    private IEnumerator DisplayQuestion(string[] tokens, string question)
    {
        dialog.enabled = true;
        string ch = tokens[1];
        dialog.transform.Find("Question_Image").GetComponent<Image>().enabled = true;
        dialog.transform.Find("Question_Image").GetComponent<Image>().sprite = Resources.Load<Sprite>(ch);
        dialog.transform.Find("Text_Center").GetComponent<TextMeshProUGUI>().text = question;

        dialog.transform.Find("Image").GetComponent<Image>().enabled = false;
        dialog.transform.Find("Text").GetComponent<TextMeshProUGUI>().text = "";
        yield return new WaitForSeconds(float.Parse(tokens[3] == "" ? "0" : tokens[3]));
    }

    private IEnumerator SwitchCamera(string[] tokens)
    {
        for (int i = 0; i < cameras.Length; i++)
            cameras[i].SetActive(false);
        cameras[int.Parse(tokens[1])].SetActive(true);
        yield return null;
    }

    private IEnumerator MoveTo(string[] tokens)
    {
        GameObject obj = map[tokens[1]];
        Vector3 target = map[tokens[2]].transform.position;
        float duration = float.Parse(tokens[3] == "" ? "3" : tokens[3]);

        float elapsedTime = 0f;
        Vector3 startingPos = obj.transform.position;
        while (elapsedTime < duration)
        {
            obj.transform.position = Vector3.Lerp(startingPos, target, elapsedTime / duration);
            obj.transform.forward = (target - obj.transform.position).normalized;
            elapsedTime += Time.deltaTime;
            yield return null;
        }
        obj.transform.position = target;
    }`;

function MazeForest() {
    const codeSnippets = [
        `<div>
      Your code here
      Another line of code
      More code...
    </div>`,
      ];
    const [isOpen, setIsOpen] = useState(false);
    const codeContainerRef = useRef(null);
  
    const toggleCode = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      if (codeContainerRef.current) {
        if (isOpen) {
          codeContainerRef.current.style.maxHeight = `${codeContainerRef.current.scrollHeight}px`;
        } else {
          codeContainerRef.current.style.maxHeight = '60px';
        }
      }
    }, [isOpen]);
  

    const updatedate = "2024. 06. 09." //최종 업데이트 일자
    const notify = () => toast.error('제작 진행중입니다.', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet>
                <title>미로의 숲 - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div className="bg-white-gray ">
                    <div className="container-xxl px-4 pt-6" id="seemore">
                    <div className="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">미로의 숲 <span class="btn btn-sm btn-primary-round-outline">교육용 게임</span></div>
                        <a href="https://github.com/usfree/Unity_MazeForest" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4 me-3"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a>
                        <a href="https://github.com/usfree/React_PortfolioSite/raw/main/src/images/Unity/MazeForest/MazeForest_Build.7z" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faDownload} /> 빌드 파일</a>
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                {/*<div className="mb-3 w-100 card card-cover-safe p-3 border-0 font-11 rounded-4">
                                                    <span className="text-only-white font-11"><FontAwesomeIcon icon={faPenToSquare} /> 제작이 완료되어 프로젝트에 관한 자세한 내용을 작성하고 있습니다.</span>
                                                </div>*/}
                                                <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 06. 05. - 06. 11.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">미로로 구성된 숲을 주어진 문제를 해결해 나가며 탈출하는 교육용 게임입니다. 플레이어블 캐릭터를 조작합니다.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">3인 팀 개발</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">담당 파트　<span className="fw-light fs-6 mb-2 text-black">개발 주도 / 게임 시스템 제작 / UI 구성 및 제작 / 시나리오 엔진 개선 등</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span className="fw-light fs-6 mb-2 text-black px-2">
                                                    &middot; 통합된 시나리오 엔진 코드를 사용하여 교육 문제를 개발자가 아니더라도 교육 담당자가 편리하게 변경할 수 있음.
                                                    <br/>&middot; 게임 틀을 그대로 가져가고, 문제의 종류만 바꿔 다른 목표의 교육 훈련을 진행할 수 있음.
                                                    <br/>&middot; 밟았을 때 플레이어의 속도가 느려지는 슬로우존, 밟으면 최종 저장위치로 돌아가는 데스블록 등이 존재함. 
                                                    <br/>&middot; URP(Universal Render Pipeline)에서 GobalVolume을 사용하여 카메라 포스트 프로세싱을 게임의 분위기에 맞게 조절함.
                                                    </span>
                                                </div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div className="mb-4 px-2 font-11">유니티로 제작된 교육(훈련)용 게임입니다. 주 타겟은 프로그래밍 언어인 C#을 처음 접하는 플레이어입니다. 문제 수정을 통해 다른 주제로 자유롭게 변경이 가능합니다. 이를 위해 자연스러운 시나리오 구현을 목표로 제작하였습니다.</div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4">
                                                    # Unity 2022.3.21f1<br/>
                                                    Unity_MazeForest.sln
                                                </div>
                                                <hr/>
                                                <div className="font-11 fs-2 fw-bold"><b>Logo</b></div>
                                                <img className="mb-3" src={logo} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">미로로 구성되어 있는 숲을 빠져나가는 컨셉에 맞게 적절한 AI 프롬프트를 사용해 로고를 제작하였습니다.</p>
                                                
                                                <div className="font-11 fs-2 fw-bold"><b>InGame</b></div>
                                                <img className="mb-3" src={img1} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">플레이어는 할당된 키를 통해 물총을 줌 / 발사할 수 있습니다.</p>
                                                <img className="mb-3" src={img2} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">각 문제별로 할당된 트리거에 도달하면 퀴즈 문제가 출력되고, 정답에 맞는 과녁을 맞추면 앞으로 전진할 수 있습니다. 과녁 또한 공통 스크립트로 구성되어 있어, 에디터 상에서 bool 값만 조절해주면 간편하게 정답을 변경할 수 있습니다.</p>
                                                <img className="mb-3" src={img3} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">플레이어가 닿으면 이동속도가 느려지는 함정 발판이 존재합니다.</p>
                                                <img className="mb-3" src={img4} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">미로에는 구석구석 NPC가 배치되어 있고, 이 NPC에 가까이 가면 대화 스크립트가 출력되며 그 이후부터는 플레이어를 따라 다니게 됩니다. 게임이 종료된 후에는 찾은 NPC의 수와 틀린 문제의 수를 출력합니다.</p>
                                                <img className="mb-3" src={img5} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">플레이어가 게임 클리어 트리거에 도달하면, 따라오던 NPC는 그 자리에서 춤을 춥니다.</p>
                                                <img className="mb-3" src={img6} style={{width: '800px'}}></img>
                                                <p className="mb-5 font-11">플레이어가 게임 클리어 트리거에 도달하면, skybox가 밤으로 바뀌며 불꽃놀이가 실행되고 축하음악과 영상이 재생됩니다.</p>

                                                <div className="font-11 fs-2 fw-bold"><b>ScenarioEngine</b></div>
                                                <CodeBox code={code1}/>
                                                <p className="mb-5 font-11">시나리오 엔진을 사용해 Resources폴더에서 script 파일을 가져와 동적으로 리소스를 로드합니다. 각 function별로 코루틴 함수를 실행하며, 중복으로 UI가 로드되는 문제를 방지하기 위해 코루틴 함수 실행 중 다른 코루틴 함수가 입력되면 기존의 코루틴 함수는 중지합니다.</p>
                                                <div className="font-11 fs-2 fw-bold"><b>Result</b></div>
                                                <video src={video} controls controlsList="nodownload"></video><br/><br/>
                                                <div className="font-11 fs-2 fw-bold"><b>Presentation</b></div>
                                                <p><iframe style={{width:'100%', height:'900px'}} src={pdf}></iframe></p>
                                                <span className="font-11">브라우저에서 PDF뷰어를 지원하지 않을 경우 <a href={pdf}><div className="btn btn-primary-round-outline px-4 fs-7 rounded-4"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="text-end">
                            <Link to='/project' className="btn btn-outline-dark px-4 py-2-5 fs-6 fw-bolder mt-3 mb-5 rounded-4"><FontAwesomeIcon icon={faBars} />　목록으로</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      );
    }


  export default MazeForest;