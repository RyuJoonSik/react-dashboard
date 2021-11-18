import { VscDashboard } from "react-icons/vsc";
import {
  AiOutlineSearch,
  AiOutlineControl,
  AiOutlineTool,
} from "react-icons/ai";
import { GiElectric, GiCircularSaw } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

export const LISTS = [
  { id: 1, title: "대시보드", icon: <VscDashboard /> },
  {
    id: 2,
    title: "검색 및 분석",
    icon: <AiOutlineSearch />,
    subLists: ["검색 및 분석", "리포트"],
  },
  {
    id: 3,
    title: "일괄 제어",
    icon: <AiOutlineControl />,
  },
  {
    id: 4,
    title: "관리",
    icon: <AiOutlineTool />,
    subLists: [
      "지역, 허브, 장치 관리",
      "스케줄 관리",
      "사용자 관리",
      "사용량 합산",
      "장치 일괄설정",
    ],
  },
  {
    id: 5,
    title: "에너지절감 정책",
    icon: <GiElectric />,
    subLists: ["정책 템플렛", "지역단위 정책", "그룹단위 정책"],
  },
  { id: 6, title: "로그 관리", icon: <FiMonitor /> },
  { id: 7, title: "환경설정", icon: <GiCircularSaw /> },
];
