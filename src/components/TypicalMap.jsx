import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TypicalMap() {
  const [hoveredTower, setHoveredTower] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const params = useParams();

  const getPostData = async () => {
    try {
      const res = await getPost();
      const filteredData = res.data.filter(
        (item) => item.floor === params.Id && item.tower === params.towerId
      );
      console.log(filteredData);
      setFloorData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const pathData = [
    "M987 52.5L683.5 281L824.5 382L860.5 355L912 389.5L913 384.5L925 392.5L927 401L953.5 420.5L954.5 419.5L990 392.5L974 381L981 379L982 376.5V365L1005 349.5L1006.5 357L1012 353L1027.5 365L1029 359.5H1034.5L1105.5 306.5L1117 297.5H1118.5L1136 286V284.5L1137 273.5L1160 288V300L1161.5 301L1210 265.5L1171 238L1197 218.5L1192.5 214.5L1207 206V196L1224.5 184V190.5L1247 173.5L1192.5 135L1190 137L1189.5 128.5L1178 120L1177 120.5V124L1051.5 37L1046.5 41L1046 29.5L1028 42L1019.5 38.5H1012L1006 40L988 54L987 52.5Z",
    "M1133.5 407L1112.5 421.5L1108 425.5L1105 415L1079.5 435V445.5L1073.5 450L1108 474.5L1073.5 503L1098.5 520V513.5L1109.5 521.5L1110.5 531.5H1112.5L1165.5 568.5L1130 594L1287 703V738.5L1289.5 736.5L1615.5 491.5L1624.5 482V475.5L1622 471.5V460.5L1620 455L1596.5 438V417L1590.5 412.5V409L1588.5 407.5L1587.5 409H1586L1468 327L1464 330V321L1453.5 313L1451.5 321L1397 282L1377.5 297.5L1376 289.5L1358 301.5V310.5L1354 313L1349 309.5L1346 311.5V319.5L1344.5 321L1342 318L1340.5 319V334.5L1315 353.5L1276 326L1245.5 348L1252 352V363.5L1256 364L1165 429L1133.5 407Z",
    "M1025 576L1002.5 561.5L999 557L964 583.5L971.5 588L948.5 605V618L904 652L888 639.5L817 691.5L810 686.5L808 688V694.5L804 696L785 709V718L788 721.5L752 747.5L763.5 755.5L750.5 765L748.5 755.5L731 768.5V780L683 818L692 824.5V812.5L704.5 822.5V835L702 837.5L712 844.5L667.5 877L744.5 933.5V969L850.5 1041.5L857 1046L866.5 1049L875.5 1046L883.5 1041.5L1284 741L1286 704L1129 596.5L1095.5 621L1039.5 583.5V572.5L1025 565V576Z",
    "M824 382.5L671 273H668.5L666 274.5V293.5L509 412L366.5 519.5L258 603.5V621V625.5L260.5 632L370.5 708L372 690V674.5H374.5L455 726.5L500.5 693.5L512 699V688.5L522.5 695.5V709L533.5 716.5L584.5 678V666.5L603 654V664.5L605 666.5L620 655.5L629 661.5L664.5 634.5L667.5 637.5L669.5 629.5L753 569L765.5 561L754.5 548.5L791.5 519.5L801 514.5V502L825.5 485.5V492L828 489.5L845.5 503.5L880.5 475L953.5 421L926 401.5L924.5 392L914 384.5L913 385L912.5 390L911 389.5L860 356.5L824 382.5Z",
  ];

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {floorData.map((item) => {
          const { id, status, unit_type, area } = item;
          const getStatusColor = (status) => {
            switch (status.toLowerCase()) {
              case "sold":
                return "rgba(255, 0, 0, 0.3)"; // Red for sold
              case "available":
                return "rgba(0, 255, 0, 0.3)"; // Green for available
              case "hold":
                return "rgba(6, 182, 212, 0.5)"; // Blue for hold
              default:
                return "rgba(200, 200, 200, 0.2)"; // Default gray
            }
          };
          return (
            <Tippy
              key={id}
              content={
                <div className="text-[#c8c8c8] p-2 flex flex-col gap-5">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
                    <h1 className="text-[#c8c8c8] text-lg">
                      {id.replace("_", "-").toUpperCase()}
                    </h1>
                  </div>
                  <div>{unit_type}</div>
                  <div>{status}</div>

                  <div>{area} Sq.Ft</div>
                </div>
              }
              placement="right"
              theme="light"
              arrow={true}
            >
              <Link to={`/cluster1/unit/${id}`}>
                <path
                  key={id}
                  id={id.slice(-1)}
                  d={pathData[+id.slice(-1) - 1]}
                  fill={
                    hoveredTower === id.slice(-1)
                      ? "rgba(200, 200, 200, 0.2)" // Remove color on hover
                      : getStatusColor(status) // Show status-based color by default
                  }
                  onMouseEnter={() => setHoveredTower(id.slice(-1))}
                  onMouseLeave={() => setHoveredTower(null)}
                  fillOpacity="0.48"
                  stroke="white"
                  className="cursor-pointer"
                />
              </Link>
            </Tippy>
          );
        })}
      </svg>
    </div>
  );
}
