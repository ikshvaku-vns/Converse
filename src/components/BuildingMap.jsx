import React, { useContext, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { project_svgs } from "../assets/data/svgs/project";
import { BuildingContext } from "../context/BuildingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { Link } from "react-router-dom";

const BuildingMap = () => {
  const { count, setCount } = useContext(BuildingContext);
  const [hoveredTower, setHoveredTower] = useState(null);

  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {Object.entries(project_svgs[count]).map(([towerId, path]) => (
          <Tippy
            key={towerId}
            content={
              <div className="text-[#c8c8c8] p-2 flex flex-col gap-5">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
                  <h1 className="text-[#c8c8c8] text-lg">{towerId}</h1>
                </div>
                <div>40 Floors | 158 Apartments</div>
                <div>2BHK,3BHK,4BHK</div>

                <div> 2440-6780 Sq.Ft</div>
              </div>
            }
            placement="right"
            theme="light"
            arrow={true}
          >
            <Link
              to={
                ["T1", "T2"].includes(towerId)
                  ? `/cluster1`
                  : ["T3", "T4"].includes(towerId)
                  ? `/cluster2`
                  : ["T5", "T6"].includes(towerId)
                  ? `/cluster3`
                  : "/default-page"
              }
            >
              <path
                d={path}
                className="transition-all duration-300 cursor-pointer"
                fill={
                  hoveredTower === towerId
                    ? "rgba(0, 255, 0, 0.3)"
                    : "rgba(200, 200, 200, 0.2)"
                }
                onMouseEnter={() => setHoveredTower(towerId)}
                onMouseLeave={() => setHoveredTower(null)}
              />
            </Link>
          </Tippy>
        ))}
      </svg>
    </div>
  );
};

export default BuildingMap;
