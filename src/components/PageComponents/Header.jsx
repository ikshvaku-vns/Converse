import { useState } from "react";
export default function Header({ cluster }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 px-8 pt-10">
      <div className="flex">
        <div
          className={`${
            isVisible ? "w-70" : "w-110"
          } h-12 bg-[#333333]/90 flex items-center gap-6 rounded-l-lg p-2 pr-0 transition-all duration-500`}
        >
          <div className="w-[33%] h-[80%] bg-white flex justify-center rounded-lg overflow-hidden">
            <img
              src="logo.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {!isVisible && (
            <div className="flex items-center p-0 ">
              <div className="bg-[#595959] flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                <h1 className="text-sm text-[#bdbdbd]">Sector 66</h1>
              </div>
            </div>
          )}

          <div className="flex items-center p-0 ">
            <div className="bg-white flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
              <h1 className="text-sm">{cluster}</h1>
            </div>
          </div>
        </div>
        <div className="w-10 h-12 header-button flex justify-center items-center">
          <span
            onClick={() => setIsVisible(!isVisible)}
            className="text-white text-3xl cursor-pointer"
          >
            {isVisible ? "＞" : " ＜"}
          </span>
        </div>
      </div>
    </div>
  );
}
