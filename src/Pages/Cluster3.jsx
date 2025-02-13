import { useState } from "react";
import { tower3 } from "../assets/data/iso/towers/t5_t6/tower3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faCircle,
} from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { useContext } from "react";
import { BuildingContext } from "../context/BuildingContext";
import ClusterMap3 from "../components/ClusterMap3";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Cluster3() {
  const { clusterCount, setClusterCount } = useContext(BuildingContext);
  const [opacity, setOpacity] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hide, setHide] = useState(false);

  const moveRight = () => {
    setClusterCount((count) => (count >= 14 ? 0 : count + 1));
  };

  const moveLeft = () => {
    setClusterCount((count) => (count <= 0 ? 14 : count - 1));
  };

  const images = [
    tower3.image0,
    tower3.image1,
    tower3.image2,
    tower3.image3,
    tower3.image4,
    tower3.image5,
    tower3.image6,
    tower3.image7,
    tower3.image8,
    tower3.image9,
    tower3.image10,
    tower3.image11,
    tower3.image12,
    tower3.image13,
    tower3.image14,
  ];

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${images[clusterCount]})`,
          transform: "scale(1)",
          transformOrigin: "center center",
        }}
      >
        {!hide && <ClusterMap3 />}
        {/* Header Section */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 px-8 pt-10">
          <div className="flex">
            <div className="w-110 h-12 bg-[#333333]/90 flex items-center gap-6 rounded-l-lg p-2 pr-0">
              <div className="w-[33%] h-[80%] bg-white flex justify-center rounded-lg overflow-hidden">
                <img
                  src="logo.jpeg"
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center p-0 ">
                <div className="bg-[#595959] flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                  <h1 className="text-sm text-[#bdbdbd]">Sector 66</h1>
                </div>
              </div>
              <div className="flex items-center p-0 ">
                <div className="bg-white flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                  <h1 className="text-sm">Cluster3</h1>
                </div>
              </div>
            </div>
            <div className="w-10 h-12 bg-[#595959]/95 flex justify-center items-center">
              <span className="text-white text-3xl">＞</span>
            </div>
          </div>
        </div>

        {/* Left Side Panel */}
        <div
          className={`fixed left-8 top-30 z-50 w-44 ${
            !isExpanded ? "h-80" : "h-10"
          } bg-[#333333]/90 rounded-2xl text-white flex flex-col  p-1 transition-all duration-300`}
        >
          {/* Top content - always visible */}
          <p className="text-[#bdbdbd] text-center mb-5">Filters</p>

          {/* Middle content - collapsible */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              !isExpanded ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
          >
            <div className="w-full flex flex-col justify-center items-center gap-0.5 mb-8">
              <h1 className="text-[#eeeeee] mb-5">316 Units Total</h1>
              <div
                className={`w-[90%] h-6 ${
                  !hide ? "bg-[#4391a5]" : "bg-[#bdbdbd]/30"
                } bg-[#4391a5] flex justify-center rounded-t-lg`}
              >
                <h1 className="text-[#f7fce5]">2BHK</h1>
              </div>
              <div
                className={`w-[90%] h-6 ${
                  !hide ? "bg-[#4391a5]" : "bg-[#bdbdbd]/30"
                } bg-[#4391a5] flex justify-center rounded`}
              >
                <h1 className="text-[#f7fce5]">3BHK</h1>
              </div>
              <div
                className={`w-[90%] h-6 ${
                  !hide ? "bg-[#4391a5]" : "bg-[#bdbdbd]/30"
                } bg-[#4391a5] flex justify-center rounded-b-lg`}
              >
                <h1 className="text-[#f7fce5]">4BHK</h1>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4 mb-8">
              <p>Size Sq. Ft</p>
            </div>

            <div
              onClick={() => setHide(!hide)}
              className="w-[90%] h-6 bg-[#dadada] flex justify-center rounded-lg mx-auto mt-4 cursor-pointer"
            >
              <h1 className="text-black ">{!hide ? "Hide All" : "Show All"}</h1>
            </div>
          </div>

          {/* Button - moves up when collapsed */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-white text-center text-xl w-16 h-6 absolute left-1/2 -translate-x-1/2 bg-[#595959] rounded-2xl transition-all duration-300 cursor-pointer ${
              isExpanded ? "bottom-[-32px]" : "bottom-[-32px]"
            }`}
          >
            {!isExpanded ? "^" : "v"}
          </button>
        </div>

        {/* tower names */}
        <div
          className={`fixed left-160 top-8 z-40  rounded-xl flex items-center justify-between gap-8 ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <div className="w-20 h-7 bg-[#333333]/95  flex justify-center items-center rounded-lg">
            <h1 className="text-[#bdbdbd] text-xl">T5</h1>
          </div>
          <div className="w-20 h-7 bg-[#333333]/95  flex justify-center items-center rounded-lg">
            <h1 className="text-[#bdbdbd] text-xl">T6</h1>
          </div>
        </div>

        {/* Right Side Panels */}
        <Tippy content={"Hide Overlays"} placement="left">
          <div
            onClick={() => setOpacity(!opacity)}
            className={`fixed right-10 top-10 z-50 w-10 h-10  rounded-xl flex items-center justify-center cursor-pointer ${
              opacity ? "bg-amber-400" : "bg-[#333333]/90"
            }`}
          >
            <FontAwesomeIcon className="text-white" icon={faEyeSlash} />
          </div>
        </Tippy>

        {/* Legend Panel */}
        <div
          className={`fixed right-10 top-30 z-50 w-40 h-40 bg-[#333333]/90 rounded-xl p-2 pt-3 flex flex-col justify-between transform scale-75 origin-top-right ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <h3 className="text-gray-300 mb-3">Unit Status Legend</h3>
          <div className="space-y-2 px-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-300">Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-gray-300">Sold</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
              <span className="text-gray-300">Hold</span>
            </div>
          </div>
        </div>

        {/* Explore Towers Panel */}
        <div
          className={`fixed right-10 top-80 z-50 w-40 bg-[#333333]/90 rounded-xl p-4 transform scale-75 origin-top-right ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <h3 className="text-gray-300 mb-4 px-2">Explore Towers</h3>

          <div className="space-y-2 ">
            <NavLink to="/cluster1">
              <div className="flex gap-2 mb-2 ">
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T1
                </button>
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T2
                </button>
              </div>
            </NavLink>

            <NavLink to="/cluster2">
              <div className="flex gap-2 mb-2">
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T3
                </button>
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T4
                </button>
              </div>
            </NavLink>

            <NavLink to="/cluster3">
              <div className="flex gap-2 mb-2">
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T5
                </button>
                <button className="bg-black text-white rounded-lg p-2 text-sm hover:bg-gray-800 w-20 cursor-pointer">
                  T6
                </button>
              </div>
            </NavLink>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div
          className={`fixed left-60   bottom-1/3 z-50 flex justify-between px-10 ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <button
            className="bg-[#333333] text-3xl text-white px-2 py-5 rounded-3xl border border-white hover:bg-[#444444]"
            onClick={moveLeft}
          >
            ＜
          </button>
        </div>
        <div
          className={`fixed right-60  bottom-1/3 z-50 flex justify-between px-10 ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <button
            className="bg-[#333333] text-3xl text-white px-2 py-5 rounded-3xl border border-white hover:bg-[#444444]"
            onClick={moveRight}
          >
            ＞
          </button>
        </div>
      </div>
    </div>
  );
}
