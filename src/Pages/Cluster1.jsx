import { useContext, useEffect, useState } from "react";
import { tower1 } from "../assets/data/iso/towers/t1_t2/tower1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ClusterMap1 from "../components/ClusterMap1";
import { BuildingContext } from "../context/BuildingContext";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Header from "../components/PageComponents/Header";
import FilterPanel from "../components/PageComponents/FilterPanel";
import TowerNames from "../components/PageComponents/TowerNames";
import Overlays from "../components/PageComponents/Overlays";
import LegendPanel from "../components/PageComponents/LegendPanel";
import TowerPanel from "../components/PageComponents/TowerPanel";

export default function Cluster1() {
  const { clusterCount, setClusterCount, hide, setHide, opacity } =
    useContext(BuildingContext);

  const moveRight = () => {
    setClusterCount((count) => (count >= 14 ? 0 : count + 1));
  };

  const moveLeft = () => {
    setClusterCount((count) => (count <= 0 ? 14 : count - 1));
  };

  const images = [
    tower1.image0,
    tower1.image1,
    tower1.image2,
    tower1.image3,
    tower1.image4,
    tower1.image5,
    tower1.image6,
    tower1.image7,
    tower1.image8,
    tower1.image9,
    tower1.image10,
    tower1.image11,
    tower1.image12,
    tower1.image13,
    tower1.image14,
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
        {!hide && <ClusterMap1 />}
        {/* Header Section */}
        <Header cluster={"Cluster1"} />

        {/* Left Side Panel */}
        <FilterPanel />

        {/* tower names */}
        <TowerNames tower1={"T1"} tower2={"T2"} />

        {/* Right Side Panels */}
        <Overlays />

        {/* Legend Panel */}
        <LegendPanel />

        {/* Explore Towers Panel */}
        <TowerPanel />

        {/* Navigation Buttons */}
        <div
          className={`fixed left-60   bottom-1/3 z-50 flex justify-between px-10 ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <button
            className="bg-[#333333] text-3xl text-white px-2 py-5 rounded-3xl border border-white hover:bg-[#444444] cursor-pointer"
            onClick={moveLeft}
          >
            ＜
          </button>
        </div>
        <div
          className={`fixed right-60  bottom-1/3 z-50 flex justify-between px-10  ${
            opacity ? "opacity-15" : ""
          }`}
        >
          <button
            className="bg-[#333333] text-3xl text-white px-2 py-5 rounded-3xl border border-white hover:bg-[#444444] cursor-pointer"
            onClick={moveRight}
          >
            ＞
          </button>
        </div>
      </div>
    </div>
  );
}
