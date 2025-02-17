import { useContext, useState } from "react";
import { BuildingContext } from "../../context/BuildingContext";
export default function FilterPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { hide, setHide, opacity, setOpacity } = useContext(BuildingContext);

  return (
    <div
      className={`fixed left-8 top-30 z-50 w-44 ${
        !isExpanded ? "h-80" : "h-10"
      } bg-[#333333]/90 rounded-2xl text-white flex flex-col  p-1 transition-all duration-300 ease-in-out ${
        opacity ? "opacity-15" : ""
      }`}
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
  );
}
