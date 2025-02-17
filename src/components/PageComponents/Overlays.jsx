import { useContext } from "react";
import { BuildingContext } from "../../context/BuildingContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Overlays() {
  const { opacity, setOpacity } = useContext(BuildingContext);
  return (
    <Tippy content={"Hide Overlays"} placement="left">
      <div
        onClick={() => setOpacity(!opacity)}
        className={`fixed right-10 top-10 z-50 w-10 h-10  rounded-xl flex items-center justify-center cursor-pointer ${
          opacity ? "bg-amber-400" : "bg-[#333333]/90"
        }`}
      >
        <FontAwesomeIcon className="text-white" icon={faEyeSlash} />
      </div>
    </Tippy>
  );
}
