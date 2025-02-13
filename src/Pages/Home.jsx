import { useContext, useState } from "react";

import { projects } from "../assets/data/iso/project/projects";
import BuildingMap from "../components/BuildingMap";
import { BuildingContext } from "../context/BuildingContext";

export default function Home() {
  const { count, setCount } = useContext(BuildingContext);
  const moveRight = () => {
    setCount((count) => (count >= 3 ? 0 : count + 1));
  };

  const moveLeft = () => {
    setCount((count) => (count <= 0 ? 3 : count - 1));
  };

  const images = [
    projects.image0,
    projects.image1,
    projects.image2,
    projects.image3,
  ];

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${images[count]})`,
          transform: "scale(1)",
          transformOrigin: "center center",
        }}
      >
        <BuildingMap />
        {/* Header Section */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center  p-4 px-12 pt-10">
          <div className="flex">
            <div className="w-70 h-15 bg-[#333333]/90 flex  items-center gap-7 rounded-l-2xl p-2 pr-0">
              <div className="w-[33%] h-[60%] bg-white flex justify-center rounded-lg overflow-hidden">
                <img
                  src="logo.jpeg"
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center p-0 ">
                <div className="bg-white flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                  <h1 className="text-sm">Sector 66</h1>
                </div>
              </div>
            </div>
            <div className="w-10 h-15 bg-[#595959]/95 flex justify-center items-center">
              <span className="text-white text-3xl">＞</span>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-1/3 z-50 flex justify-between px-20">
          <button
            className="bg-[#333333] text-2xl text-white px-2 py-6 rounded-3xl border border-white hover:bg-[#444444]"
            onClick={moveLeft}
          >
            ＜
          </button>
          <button
            className="bg-[#333333] text-2xl text-white px-2 py-6 rounded-3xl border border-white hover:bg-[#444444]"
            onClick={moveRight}
          >
            ＞
          </button>
        </div>
      </div>
    </div>
  );
}
