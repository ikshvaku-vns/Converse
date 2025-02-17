import { useContext } from "react";
import { BuildingContext } from "../../context/BuildingContext";
import { NavLink } from "react-router-dom";
export default function TowerPanel() {
  const { opacity, setOpacity } = useContext(BuildingContext);
  return (
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
  );
}
