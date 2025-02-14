import React, { useContext, useState, useEffect } from "react";
import { t1_t2_frames_svg } from "../assets/data/svgs/towers";
import { BuildingContext } from "../context/BuildingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getPost } from "../api/PostApi";
import { Link } from "react-router-dom";

function ClusterMap1() {
  const [hoveredPath, setHoveredPath] = useState(null);
  const { clusterCount } = useContext(BuildingContext);
  const [floorData, setFloorData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const getPostData = async () => {
    try {
      const res = await getPost();
      setFloorData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getFloorStats = (tower, floor) => {
    const unitsOnFloor = floorData.filter(
      (unit) => unit.tower === tower && unit.floor === floor
    );

    const stats = {
      totalUnits: unitsOnFloor.length,
      soldUnits: unitsOnFloor.filter((unit) => unit.status === "sold").length,
      availableUnits: unitsOnFloor.filter((unit) => unit.status === "available")
        .length,
      unitTypes: [...new Set(unitsOnFloor.map((unit) => unit.unit_type))],
      areaRange: unitsOnFloor.length
        ? {
            min: Math.min(...unitsOnFloor.map((unit) => Number(unit.area))),
            max: Math.max(...unitsOnFloor.map((unit) => Number(unit.area))),
          }
        : null,
    };

    return stats;
  };

  useEffect(() => {
    getPostData();
    console.log(floorData);
    getFloorStats();
  }, []);

  const addInteractivity = (
    element,
    parentIds = { tower: null, floor: null }
  ) => {
    // If this is the top-level g, set the tower ID
    if (element.type === "g" && !parentIds.tower) {
      parentIds.tower = `T${element.props.id}`; // Convert to match API format (e.g., "T1")
    }
    // If this is a nested g and we have a tower ID, set the floor ID
    else if (element.type === "g" && parentIds.tower && !parentIds.floor) {
      parentIds.floor = element.props.id.toString(); // Convert to match API format
    }

    return React.cloneElement(element, {
      children: React.Children.map(element.props.children, (child) => {
        if (!child) return null;

        if (child.type === "g") {
          return addInteractivity(child, { ...parentIds });
        } else if (child.type === "path") {
          const stats = getFloorStats(
            parentIds.tower.split("_")[0],
            parentIds.floor.split("_")[0]
          );

          const clonedPath = React.cloneElement(child, {
            onMouseEnter: () => setHoveredPath(child.props.id),
            onMouseLeave: () => setHoveredPath(null),
            fillOpacity: hoveredPath === child.props.id ? "0.8" : "0.48",
            fill: stats.soldUnits > 1 ? "red" : "#35ee7f",
            className: "transition-all duration-300 cursor-pointer",
          });

          return (
            <Tippy
              duration={[200, null]}
              offset={[0, 45]}
              theme="custom"
              content={
                <div className="text-[#c8c8c8] flex flex-col gap-2 p-1 w-50">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
                    <h1 className="text-[#4391a5] text-lg">
                      {parentIds.tower.split("_")[0]} Tower , Floor
                      {parentIds.floor.split("_")[0]}
                    </h1>
                  </div>
                  <div className="w-full bg-black rounded p-2">
                    {stats.totalUnits} Apartments
                  </div>
                  <div className="w-full bg-black rounded p-2">
                    {stats.soldUnits} Sold, {stats.availableUnits} Available
                  </div>
                  <div className="w-full bg-black rounded p-2">
                    Unit Types: {stats.unitTypes[0]}
                  </div>
                  {stats.areaRange && (
                    <div className="w-full bg-black rounded p-2">
                      {stats.areaRange.min}-{stats.areaRange.max} Sq.Ft
                    </div>
                  )}
                </div>
              }
              placement="left"
              arrow={false}
            >
              <Tippy
                duration={[200, null]}
                theme="custom2"
                content={<div>{parentIds.floor.split("_")[0]}</div>}
                placement="left"
                arrow={false}
              >
                <Link
                  className="focus:outline-none"
                  to={`/cluster1/${parentIds.tower.split("_")[0]}/floor/${
                    parentIds.floor.split("_")[0]
                  }`}
                >
                  {clonedPath}
                </Link>
              </Tippy>
            </Tippy>
          );
        }
        return child;
      }),
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {addInteractivity(t1_t2_frames_svg[clusterCount])}
      </svg>
    </div>
  );
}

export default ClusterMap1;
