import { useContext } from "react";
import { BuildingContext } from "../../context/BuildingContext";

export default function LegendPanel() {
  const { opacity, setOpacity } = useContext(BuildingContext);
  return (
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
  );
}
