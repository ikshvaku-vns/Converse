import { useState } from "react";
export default function RefugeMap() {
  const [hoveredTower, setHoveredTower] = useState(null);
  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          id="4"
          d="M428 529L564.5 666L569.5 670L617.5 624.5L642.5 649.5L733 570.5L741.5 578L797.5 526L868 459.5L857 449.5L897 413.5L895.5 405L916 387.5L739.5 254L744 269L486 472L433 514.5L428 520.5V529Z"
          fill={
            hoveredTower === "4"
              ? "rgba(0, 255, 0, 0.3)"
              : "rgba(200, 200, 200, 0.2)"
          }
          onMouseEnter={() => setHoveredTower("4")}
          onMouseLeave={() => setHoveredTower(null)}
          className="cursor-pointer"
          fill-opacity="0.48"
          stroke="black"
        />
        <path
          id="3"
          d="M1352 599.5L1188 484.5L1160.5 512L1109 475.5L1110 468.5L1098.5 460.5L1096.5 466L1075 451L1039.5 484.5L1007.5 461L1004.5 465V457L1002 455L981.5 474.5V483L976 487.5L1023 523L994.5 552L979.5 540.5L911.5 608.5L908.5 606.5L903 612L881.5 633.5L884 635.5L885 640L887 641.5L854 676.5L863 684.5L850 697.5L848 695.5L830 714L831.5 716.5L830.5 717.5L776 774L808 803.5L757.5 857L842.5 941L846 944L853 951L971.5 1065H978.5H987.5L993.5 1061.5L1342.5 612.5L1352 599.5Z"
          fill={
            hoveredTower === "3"
              ? "rgba(0, 255, 0, 0.3)"
              : "rgba(200, 200, 200, 0.2)"
          }
          onMouseEnter={() => setHoveredTower("3")}
          onMouseLeave={() => setHoveredTower(null)}
          className="cursor-pointer"
          fill-opacity="0.48"
          stroke="black"
        />
        <path
          id="2"
          d="M1543 352L1353.5 596L1352 598L1188.5 484L1214 455L1163.5 419.5V414L1153.5 406.5L1151.5 411L1127 392.5L1158.5 363.5L1127 343L1129 334.5L1146 317.5L1146.5 320.5L1147.5 322L1190 350.5L1218.5 325.5L1203.5 314L1249 265.5L1251.5 256L1231 244.5L1233 242.5L1240.5 247.5L1241.5 246.5L1255 232.5L1289.5 253.5L1305.5 237L1309.5 225.5L1315 227.5L1319.5 220L1321 218.5L1324.5 212.5L1335.5 202.5L1344.5 193.5L1395 221.5L1398.5 216.5L1409.5 223L1407 229L1529.5 297.5L1530 297L1533.5 293L1535 293.5L1532 298.5L1521.5 314L1545.5 328L1549.5 333L1551 337L1550.5 339.5L1543.5 349L1543 352Z"
          fill={
            hoveredTower === "2"
              ? "rgba(0, 255, 0, 0.3)"
              : "rgba(200, 200, 200, 0.2)"
          }
          onMouseEnter={() => setHoveredTower("2")}
          onMouseLeave={() => setHoveredTower(null)}
          className="cursor-pointer"
          fill-opacity="0.48"
          stroke="black"
        />
        <path
          id="1"
          d="M1034 41L863.5 176H862.5L1038 288L1040 285V275.5L1057.5 260V265.5L1088 239.5L1103.5 250.5L1150.5 205L1152 197L1171 206.5V217.5L1202 188.5L1168.5 169L1177.5 162L1192 144.5L1193 136L1203.5 126.5L1203 133.5L1203.5 134.5L1217.5 121L1214.5 120L1172 97L1173.5 90L1164 84L1161.5 90L1065.5 35L1062.5 36.5V28L1046.5 41H1043.5H1041H1034Z"
          fill={
            hoveredTower === "1"
              ? "rgba(0, 255, 0, 0.3)"
              : "rgba(200, 200, 200, 0.2)"
          }
          onMouseEnter={() => setHoveredTower("1")}
          onMouseLeave={() => setHoveredTower(null)}
          className="cursor-pointer"
          fill-opacity="0.48"
          stroke="black"
        />
      </svg>
    </div>
  );
}
