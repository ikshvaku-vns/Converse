import { T1 } from "../assets/data/iso/floors/T1/T1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import RefugeMap from "../components/RefugeMap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function FloorRefuge() {
  const images = [T1.refuge];
  console.log(images[0]);
  const [selectedTower, setSelectedTower] = useState("T1");
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [opacity, setOpacity] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hide, setHide] = useState(false);
  const [close, setClose] = useState(false);

  const towers = ["T1", "T2", "T3", "T4", "T5", "T6"];
  const floors = Array.from({ length: 41 }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0  overflow-hidden bg-[#9A8570]">
      <div
        className="w-full h-full bg-cover bg-center  bg-fixed"
        style={{
          backgroundImage: `url(${images[0]})`,
          transform: "scale(1)",
          transformOrigin: "center center",
        }}
      >
        <RefugeMap />
        {/* Header Section */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 px-8 pt-7">
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
                  <h1 className="text-sm">Cluster1</h1>
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
          } bg-[#333333]/90 ${
            opacity ? "opacity-15" : ""
          } rounded-2xl text-white flex flex-col transform scale-75 origin-top-left   p-1 transition-all duration-300`}
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
                } bg-[#4391a5] flex justify-center`}
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
        {/* Scroll bar menu */}
        <div
          className={`fixed left-40 ${
            !close ? "top-93" : "top-50"
          }  transform -translate-y-1/2 z-50  ${
            opacity ? "opacity-15" : ""
          } rounded-2xl text-white flex flex-col items-center justify-between  scale-70 origin-top-right p-1`}
        >
          <div className="bg-[#333333]/90 text-white p-4 rounded-lg w-64">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-3">
                {selectedTower} {selectedFloor}
              </h2>

              <div
                className={`overflow-hidden mb-4 ${
                  !close ? "h-full opacity-100" : "h-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter or select a floor"
                  value={`${selectedTower} Tower  ${selectedFloor} floor`}
                  className="w-full bg-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Tower Selection */}

            <div
              className={` overflow-hidden mb-4 ${
                !close ? "h-full opacity-100" : "h-0 opacity-0"
              }`}
            >
              <p className="text-sm mb-2">Towers</p>
              <div className="grid grid-cols-4 gap-2">
                {towers.map((tower) => (
                  <button
                    key={tower}
                    onClick={() => setSelectedTower(tower)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      tower === selectedTower
                        ? "bg-[#4391a5] text-white"
                        : "bg-black hover:bg-gray-600"
                    }`}
                  >
                    {tower}
                  </button>
                ))}
              </div>
            </div>
            {/* Floor Selection with Scrollbar */}
            <div
              className={` overflow-hidden ${
                !close ? "h-full opacity-100" : "h-0 opacity-0"
              }`}
            >
              <p className="text-sm mb-2">Floors</p>
              <div className="h-48 custom-scrollbar overflow-y-auto">
                <div className="grid grid-cols-4 gap-2 pr-2">
                  {floors.map((floor) => (
                    <button
                      key={floor}
                      onClick={() => setSelectedFloor(floor)}
                      className={`px-3 py-1 text-sm rounded transition-colors text-[#4391a5] ${
                        floor === selectedFloor
                          ? "bg-[#4391a5] text-white"
                          : "bg-[#333333]/90 hover:bg-gray-600"
                      }`}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setClose(!close)}
              className={`w-full mt-4 py-2 ${
                !close ? "bg-[#dadada]" : "bg-[#4391a5]"
              } text-black cursor-pointer rounded text-sm  transition-colors`}
            >
              {!close ? "Close" : "Select floor"}
            </button>
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
          className={`fixed right-10 top-30 z-50 w-40 h-40 bg-[#333333]/90 rounded-xl p-2 pt-3 flex flex-col justify-between transform scale-75 origin-top-right  ${
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
      </div>
    </div>
  );
}
