import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
export default function PenthouseMap() {
  const [hoveredTower, setHoveredTower] = useState(null);
  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0  w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <Tippy
          content={
            <div className="text-[#c8c8c8] p-2 flex flex-col gap-5 rounded">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
                <h1 className="text-[#c8c8c8] text-lg">T1-401</h1>
              </div>
              <div>E-4BHK+ Study+2 UTILITY</div>
              <div>6745 Sq.Ft</div>

              <div>Park Facing</div>
              <div>Hold_management</div>
              <button className="bg-[#4391a5] rounded">Explore Plan</button>
            </div>
          }
          placement="right"
          theme="light"
          arrow={false}
        >
          <path
            id="area1"
            d="M996.5 17.5L382 497.5L376.5 505L373.5 513L376.5 523.5L477.5 622.5L478.5 624L516.5 661L518.5 658.5L567.5 614.5L595 640.5L687.5 559L695 570.5L703.5 578L737.5 546L742 549L734.5 530.5L755 512.5L757 520L760 517.5L758 510L760 508L765 512.5L818.5 462.5V456.5L821.5 453.5L824 456.5L834 448L821.5 436.5L883 377.5L895 386L926.5 357.5L883 326.5L881 318L868.5 308.5V317L848 303L907 252L986.5 307.5L992 303V294.5L1013.5 276L1002 270L1054.5 221C1059 223.667 1068.4 229.2 1070 230C1071.6 230.8 1091.33 211 1101 201L1103.5 192L1105.5 190L1110.5 193.5L1119 185.5L1122 177L1140 187L1138 196H1140L1170 167L1154.5 158.5V149L1140 141.5L1171.5 112.5L1174 101L1181 95L1029.5 12V3.5L1012.5 17.5H1005H996.5Z"
            fill={
              hoveredTower === "area1"
                ? "rgba(0, 255, 0, 0.3)"
                : "rgba(200, 200, 200, 0.2)"
            }
            onMouseEnter={() => setHoveredTower("area1")}
            onMouseLeave={() => setHoveredTower(null)}
            className="cursor-pointer"
          />
        </Tippy>
        <Tippy
          content={
            <div className="text-[#c8c8c8] p-2 flex flex-col gap-5 rounded">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
                <h1 className="text-[#c8c8c8] text-lg">T1-401</h1>
              </div>
              <div>E-4BHK+ Study+2 UTILITY</div>
              <div>6745 Sq.Ft</div>

              <div>Park Facing</div>
              <div>Hold_management</div>
              <button className="bg-[#4391a5] rounded">Explore Plan</button>
            </div>
          }
          placement="right"
          theme="light"
          arrow={false}
        >
          <path
            id="area2"
            d="M1507.5 283L1323.5 178L1319 176.5L1320.5 170L1311.5 178L1308.5 189H1306.5L1270 225.5L1266.5 223L1268.5 214.5L1252 205.5L1249 212.5L1232 203.5L1206.5 225.5L1222 236V246L1226 248.5L1178 296L1193 305.5L1139.5 357L1123.5 347.5L1117.5 353L1118.5 347.5L1100 365L1097 375L1092.5 379L1185.5 440.5L1128.5 500.5L1039 437L1007 468.5L1019 480L958.5 545L943 532.5L868.5 608.5L864 603L844 622.5L848 636.5L846 638.5L850.5 641.5L816.5 676L820 679L733.5 767.5L736.5 770.5L770 800L720 851.5V857.5L930.5 1063.5L944 1068L958 1063.5L1532.5 329V319L1526 309.5L1503 295.5L1507.5 283Z"
            fill={
              hoveredTower === "area2"
                ? "rgba(0, 255, 0, 0.3)"
                : "rgba(200, 200, 200, 0.2)"
            }
            onMouseEnter={() => setHoveredTower("area2")}
            onMouseLeave={() => setHoveredTower(null)}
            className="cursor-pointer"
          />
        </Tippy>
      </svg>
    </div>
  );
}
