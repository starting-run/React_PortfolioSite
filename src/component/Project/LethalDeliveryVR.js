/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronLeft, faChevronRight, faFileContract, faPenToSquare, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import video from '../../images/Unity/LethalDeliveryVR/video.mp4'
import flow1 from '../../images/Unity/LethalDeliveryVR/flow1.png';
import flow2 from '../../images/Unity/LethalDeliveryVR/flow2.png';
import img1 from '../../images/Unity/LethalDeliveryVR/logo.png';

import prop2pdf from '../../images/projects/prop2/prop_LethalDeliveryVR.pdf';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import CodeBox from '../Function/CodeBox';

let code1 = `public class InventoryManager : MonoBehaviour
{
    public static InventoryManager Instance;

    [System.Serializable]
    public class ItemData
    {
        public string itemID;
        public string itemName;
        public Vector3 position;
        public bool isPickedUp;
    }

    private List<ItemData> itemDataList = new List<ItemData>();
    private string saveFilePath;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            SceneManager.sceneLoaded += OnSceneLoaded;

            InitializeAllItemData(); // 모든 씬의 데이터 초기화
            UpdateSaveFilePath(); // 현재 씬 파일 경로 설정
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void OnDestroy()
    {
        if (Instance == this)
        {
            SceneManager.sceneLoaded -= OnSceneLoaded;
        }
    }

    private void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        UpdateSaveFilePath();
        LoadItemData();
        RestoreItems();
    }

    private void UpdateSaveFilePath()
    {
        string sceneName = SceneManager.GetActiveScene().name;
        saveFilePath = Path.Combine(Application.persistentDataPath, $"{sceneName}_itemData.json");
    }

    public void InitializeAllItemData()
    {
        string[] files = Directory.GetFiles(Application.persistentDataPath, "*_itemData.json");
        foreach (var file in files)
        {
            File.Delete(file);
        }
        itemDataList.Clear();
    }

    public void AddItem(Item item)
    {
        DontDestroyOnLoad(item.gameObject);
        ItemData itemData = itemDataList.Find(data => data.itemID == item.itemID);
        if (itemData != null)
        {
            itemDataList.Remove(itemData);
        }
    }

    public void RemoveItem(Item item)
    {
        ItemData itemData = itemDataList.Find(data => data.itemID == item.itemID);
        if (itemData == null)
        {
            itemData = new ItemData
            {
                itemID = item.itemID,
                itemName = item.itemName,
                position = item.transform.position,
                isPickedUp = false
            };
            itemDataList.Add(itemData);
        }
        else
        {
            itemData.isPickedUp = false;
            itemData.position = item.transform.position;
        }
        item.ReturnToScene();
        SaveItemData();
    }

    public void ClearItemData()
    {
        itemDataList.Clear();
        SaveItemData();
    }

    public void SaveItemData()
    {
        string jsonData = JsonUtility.ToJson(new Serialization<ItemData>(itemDataList), true);
        File.WriteAllText(saveFilePath, jsonData);
    }

    private void LoadItemData()
    {
        if (File.Exists(saveFilePath))
        {
            string jsonData = File.ReadAllText(saveFilePath);
            itemDataList = JsonUtility.FromJson<Serialization<ItemData>>(jsonData).ToList();
        }
        else
        {
            itemDataList.Clear();
        }
    }

    public void RestoreItems()
    {
        foreach (var itemData in itemDataList)
        {
            if (!itemData.isPickedUp)
            {
                GameObject itemPrefab = Resources.Load<GameObject>($"Prefabs/{itemData.itemName}");
                if (itemPrefab != null)
                {
                    GameObject itemObject = Instantiate(itemPrefab, itemData.position, Quaternion.identity);
                    Item item = itemObject.GetComponent<Item>();
                    if (item != null)
                    {
                        item.SetItemID(itemData.itemID);
                    }
                }
            }
        }
    }

    public void RemoveItemData(string itemID)
    {
        ItemData itemData = itemDataList.Find(data => data.itemID == itemID);
        if (itemData != null)
        {
            itemDataList.Remove(itemData);
            SaveItemData();
        }
    }

}


[Serializable]
public class Serialization<T>
{
    public List<T> target;

    public Serialization(List<T> target)
    {
        this.target = target;
    }

    public List<T> ToList()
    {
        return target;
    }
}
`

function LethalDeliveryVR() {
      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet>
                <title>LethalDelivery | STARTING</title>
            </Helmet>
            <div id="projectmain">
                <div className="bg-white-gray">
                    <div className="container-full px-4 pt-6" id="seemore">
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                <div className="row row-cols-1 row-cols-lg-2 g-4">
                                                    <div className="col-lg-4">
                                                        <div className="sticky-top pc-view-only">
                                                        <div className="mb-2 fs-1 fw-bold2 font-11 project-title text-black">LethalDelivery</div><span class="fs-7 font-11">　|　리썰딜리버리　|　VR게임</span>
                                                            <a href="https://github.com/starting-run/Unity_LethalDeliveryVR" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 me-3 rounded-4"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a>
                                                            <a href={prop2pdf} target='_blank' alt='프로젝트 메인 하단에 업로드 되어있는 기획서로 제작된 게임입니다.' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faFileContract} /> 기획서</a>
                                                            <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 04. 15. - 06. 10.</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#, SteamVR SDK</span></div>
                                                                {/* <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">VR로 플레이 할 수 있도록 제작된 LBE(Local Based Entertainment) 게임임.</span></div> */}
                                                                <div className="fw-bold fs-6 highlight px-2">개발 목표</div>
                                                                <span className="fw-light fs-6 mb-2 text-black px-2">
                                                                    &middot; LBE를 이해하고, 이를 기반으로 가상 콘텐츠를 진행할 수 있어야 함.<br/>
                                                                    &middot; VR 기기에 대한 이해를 통해 HMD 디바이스를 활용한 콘텐츠를 제작해야 함.<br/>
                                                                    &middot; 로컬 세이브 파일 저장을 통해 씬 전환시 씬의 변경사항에 대한 데이터를 저장해야 함.<br/>
                                                                </span>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">4인 팀 개발</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">담당 파트　<span className="fw-light fs-6 mb-2 text-black">게임 시스템 구현(인벤토리, 게임매니저, 씬 이동 등) / 플레이어 기능 구현 / UI 구성 및 디자인 / 디테일 개선 등</span></div>
                                                                <div className="fw-bold fs-6 highlight px-2">구현 기능</div>
                                                                <span className="fw-light fs-6 mb-2 text-black px-2">
                                                                &middot; 싱글 플레이를 지원하며, 게임 데이터는 자동을 저장되어(*.json) 기록됨.
                                                                <br/>&middot; VR HMD를 통해 LBE 콘텐츠로 제작되었으며 직접 움직이거나 컨트롤러를 통해 움직여 진행할 수 있음.
                                                                <br/>&middot; 플레이어와 몬스터, 오브젝트의 상호작용을 통해 효과음과 애니메이션 등이 재생됨.
                                                                </span>
                                                                <span className='fs-7 fw-lighter'>* LBE (Local Based Entertainment)</span>
                                                            </div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                            <div className="mb-4 px-2 font-11">유니티를 통해 화제의 게임인 리썰 컴퍼니를 모작으로 VR로 플레이할 수 있도록 제작된 게임임.</div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                            <div className="mb-4 px-2 font-11">기업 현장 실습(인턴십) 프로그램을 위해 VR 프로그래밍과 LBE 콘텐츠에 대한 이해와 경험이 필요하여 제작한 게임임.</div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                            <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4">
                                                                # Unity 2021.3.37f1<br/>
                                                                LethalDelivery_VR.sln   
                                                            </div>
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 project-view-padding">
                                                        <div className="font-11 fs-2 fw-bold"><b>GameFlow</b></div>
                                                        <div className='rounded-4 mb-2'>
                                                            <img src={flow1}></img>
                                                        </div>
                                                        <div className='mb-4 font-11'>
                                                            <span className='fw-bold pe-3'>UI Flow</span>
                                                            <span className='fw-light'>UI를 통한 게임 진행의 흐름도입니다.</span>
                                                        </div>
                                                        <div className='rounded-4 mb-2'>
                                                            <img src={flow2}></img>
                                                        </div>
                                                        <div className='mb-4 font-11'>
                                                            <span className='fw-bold pe-3'>Funtion Diagram</span>
                                                            <span className='fw-light'>게임의 전체적인 흐름을 표시한 도식도입니다. 게임은 날짜가 존재하며, 날짜가 지날수록 목표금액이 증가되어 게임 클리어의 난이도가 상승합니다. 주어진 목표 금액은 3일간 유효하여 주어진 일자까지 목표 금액을 달성하지 못했을시에 게임오버가 됩니다. 전략적으로 아이템을 모아두는 것이 중요합니다.</span>
                                                        </div>


                                                        <div className="font-11 fs-2 fw-bold"><b>Develop</b></div>
                                                        <div className="font-11 fs-6 fw-light mb-4">HMD 기반 VR 가상현실 콘텐츠로 제작되었으며, 모션 트래커 장비(바이브 트래커)를 활용하여 풀트래킹 VR 게임으로 제작하였습니다. 개발은 Unity 엔진을 활용하여 제작되었고, Steam SDK를 활용하였습니다.
                                                            <br/>플레이어는 VR 컨트롤러 또는 모션 트래킹 장비를 통해 움직임이 분석되어 이동할 수 있으며, Grip 버튼으로 아이템을 집고, Trigger 버튼으로 아이템 사용이나 문 열기 등의 상호작용을 할 수 있습니다.
                                                        </div>

                                                        <div className="font-11 fs-2 fw-bold"><b>Object</b></div>
                                                        <div className="font-11 fs-6 fw-light mb-4">게임 내에는 여러가지 함정과 몬스터, 아이템이 존재합니다.
                                                            <div className='fs-5 mt-3 fw-normal'>함정</div>
                                                            <div className='mt-1'><span className='fw-bolder bg-black rounded-4 text-white p-1 px-2'>터렛</span><span className='fw-light'> 터렛은 제자리에서 빙글빙글 돌며, 시야 내 플레이어 탐지시 자동으로 플레이어를 공격합니다.</span></div>
                                                            <div className='mt-1'><span className='fw-bolder bg-black rounded-4 text-white p-1 px-2'>지뢰</span><span className='fw-light'> 플레이어가 지뢰 위를 지날시 자동으로 폭발하며, 플레이어는 즉사합니다.</span></div>
                                                            <div className='fs-5 mt-3 fw-normal'>몬스터</div>
                                                            <div className='mt-1'><span className='fw-bolder bg-black rounded-4 text-white p-1 px-2'>비축벌레</span><span className='fw-light'> 아이템을 무작위로 뺏어가 자신의 기지에 가져다 놓으려는 습성을 지닙니다. 아이템을 주지 않으면 플레이어를 공격합니다.</span></div>
                                                            <div className='mt-1'><span className='fw-bolder bg-black rounded-4 text-white p-1 px-2'>눈 없는 감시자</span><span className='fw-light'> 이름처럼 눈이 없어 플레이어를 소리로만 감지합니다. 앉아서 낮은 자세로 이동하거나 가만히 서서 회피할 수 있습니다.</span></div>
                                                            <div className='mt-1'><span className='fw-bolder bg-black rounded-4 text-white p-1 px-2'>거인</span><span className='fw-light'> 크기가 매우 큰 몬스터입니다. 만세나 몸을 크게 부풀리는 등의 모션으로 회피할 수 있습니다.</span></div>
                                                            <div className='mt-3'>아이템은 던전 맵 내부 곳곳에 위치하며, 인벤토리(4칸)에 수납하여 판매할 수 있습니다. 안전구역에는 이 아이템을 보관하여 다른 날짜에 판매할 수도 있습니다.</div>
                                                        </div>
                                                        
                                                        <div className="font-11 fs-2 fw-bold"><b>InventoryManager</b></div>
                                                        <CodeBox code={code1}/>
                                                        <div className="font-11 fs-6 fw-light mb-4">플레이어 획득한 아이템의 처리 방법입니다.
                                                            <br/>&middot; 플레이어가 아이템을 획득하면 퀵슬롯에 기록하고, DontDestroyOnLoad로 이동합니다.
                                                            <br/>&middot; 플레이어가 아이템을 드롭하면 아이템이 버려진 위치와 종류 등을 기록하여 json 파일에 저장합니다. 만약 게임을 새로 시작할 경우 프리팹을 instantiate 합니다.
                                                            <br/>&middot; 플레이어가 아이템을 가진채로 게임을 종료했다가 실행하면, 퀵슬롯의 아이템과 맵 상에 드롭된 아이템을 모두 불러옵니다.
                                                        </div>
                                                    
                                                        <div className="font-11 fs-2 fw-bold"><b>Result</b></div>
                                                        <div className="card card-border-0 p-0 rounded-4">
                                                            <video className="card-image-sec1" src={video} controls controlsList="nodownload"/>
                                                        </div>
                                                    </div>
                                                </div>
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


  export default LethalDeliveryVR;