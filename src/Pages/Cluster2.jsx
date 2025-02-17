import { tower2 } from "../assets/data/iso/towers/t3_t4/tower2";
import ClusterMap2 from "../components/ClusterMap2";
import { useContext } from "react";
import { BuildingContext } from "../context/BuildingContext";
import "tippy.js/dist/tippy.css";
import Header from "../components/PageComponents/Header";
import FilterPanel from "../components/PageComponents/FilterPanel";
import TowerNames from "../components/PageComponents/TowerNames";
import Overlays from "../components/PageComponents/Overlays";
import LegendPanel from "../components/PageComponents/LegendPanel";
import TowerPanel from "../components/PageComponents/TowerPanel";
export default function Cluster2() {
  const { clusterCount, setClusterCount, hide, setHide, opacity } =
    useContext(BuildingContext);

  const moveRight = () => {
    setClusterCount((count) => (count >= 14 ? 0 : count + 1));
  };

  const moveLeft = () => {
    setClusterCount((count) => (count <= 0 ? 14 : count - 1));
  };

  const images = [
    tower2.image0,
    tower2.image1,
    tower2.image2,
    tower2.image3,
    tower2.image4,
    tower2.image5,
    tower2.image6,
    tower2.image7,
    tower2.image8,
    tower2.image9,
    tower2.image10,
    tower2.image11,
    tower2.image12,
    tower2.image13,
    tower2.image14,
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
        {!hide && <ClusterMap2 />}
        {/* Header Section */}
        <Header cluster={"Cluster2"} />

        {/* Left Side Panel */}
        <FilterPanel />

        {/* tower names */}
        <TowerNames tower1={"T3"} tower2={"T4"} />

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
