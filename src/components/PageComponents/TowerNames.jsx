import { useState } from "react";
import { useContext } from "react";

import { BuildingContext } from "../../context/BuildingContext";
export default function TowerNames({ tower1, tower2 }) {
  const { opacity, setOpacity } = useContext(BuildingContext);
  return (
    <div
      className={`fixed left-160 top-8 z-40  rounded-xl flex items-center justify-between gap-8 ${
        opacity ? "opacity-15" : ""
      }`}
    >
      <div className="w-20 h-7 bg-[#333333]/95  flex justify-center items-center rounded-lg">
        <h1 className="text-[#bdbdbd] text-xl">{tower1}</h1>
      </div>
      <div className="w-20 h-7 bg-[#333333]/95  flex justify-center items-center rounded-lg">
        <h1 className="text-[#bdbdbd] text-xl">{tower2}</h1>
      </div>
    </div>
  );
}
