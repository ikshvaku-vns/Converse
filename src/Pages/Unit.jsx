import { flatImages } from "../assets/data/iso/flats/flatImages";

import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/PostApi";
import BookingModal from "../components/BookingModal";
export default function Unit() {
  const [zoom, setZoom] = useState(0.6);
  const [selectedTower, setSelectedTower] = useState("T1");
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [opacity, setOpacity] = useState(false);
  const [close, setClose] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  const [unitData, setUnitData] = useState([]);

  const getPostData = async () => {
    try {
      const res = await getPost();
      const filteredData = res.data.filter((item) => item.id === params.Id);
      console.log(filteredData);
      setUnitData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const towers = ["T1", "T2", "T3", "T4", "T5", "T6"];
  const floors = Array.from({ length: 41 }, (_, i) => i + 1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2)); // Max zoom 2x
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5)); // Min zoom 0.5x
  };
  return (
    <>
      <div className="fixed inset-0 overflow-hidden bg-[#9A8570] ">
        {unitData.map((item) => {
          const { _id, unit_type } = item;
          const image = unit_type.split("-")[0].trim().toLowerCase();
          return (
            <div
              key={_id}
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${flatImages[image]})`,
                backgroundSize: `${zoom * 100}%`,
                transition: "background-size 0.3s ease",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}

        {/* Header Section */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 px-8 pt-7">
          <div className="flex">
            <div className="w-110 h-12 bg-[#333333]/90 flex items-center gap-6 rounded-l-lg p-2 pr-0">
              <div className="w-[33%] h-[80%] bg-white flex justify-center rounded-lg overflow-hidden">
                <img
                  src={flatImages.logo}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center p-0 ">
                <div className="bg-[#595959] flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                  <h1 className="text-sm text-[#bdbdbd]">Sector 66</h1>
                </div>
              </div>
              <div className="flex items-center p-0 ">
                <div className="bg-white flex justify-center items-center rounded-lg px-2 py-0 w-24 h-7">
                  <h1 className="text-sm">Cluster1</h1>
                </div>
              </div>
            </div>
            <div className="w-10 h-12 bg-[#595959]/95 flex justify-center items-center">
              <span className="text-white text-3xl">＞</span>
            </div>
          </div>
        </div>

        {/* Scroll bar menu */}
        <div
          className={`fixed -left-11 ${
            !close ? "top-93" : "top-50"
          }  transform -translate-y-1/2 z-50  ${
            opacity ? "opacity-15" : ""
          } rounded-2xl text-white flex flex-col items-center justify-between  scale-70 origin-top-right p-1`}
        >
          <div className="bg-[#333333]/90 text-white p-4 rounded-lg w-64">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-3">
                {selectedTower} {selectedFloor}
              </h2>

              <div
                className={`overflow-hidden mb-4 ${
                  !close ? "h-full opacity-100" : "h-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter or select a floor"
                  value={`${selectedTower} Tower  ${selectedFloor} floor`}
                  className="w-full bg-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>

            {/* Tower Selection */}

            <div
              className={` overflow-hidden mb-4 ${
                !close ? "h-full opacity-100" : "h-0 opacity-0"
              }`}
            >
              <p className="text-sm mb-2">Towers</p>
              <div className="grid grid-cols-4 gap-2">
                {towers.map((tower) => (
                  <button
                    key={tower}
                    onClick={() => setSelectedTower(tower)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      tower === selectedTower
                        ? "bg-[#4391a5] text-white"
                        : "bg-black hover:bg-gray-600"
                    }`}
                  >
                    {tower}
                  </button>
                ))}
              </div>
            </div>
            {/* Floor Selection with Scrollbar */}
            <div
              className={` overflow-hidden ${
                !close ? "h-full opacity-100" : "h-0 opacity-0"
              }`}
            >
              <p className="text-sm mb-2">Floors</p>
              <div className="h-48 custom-scrollbar overflow-y-auto">
                <div className="grid grid-cols-4 gap-2 pr-2">
                  {floors.map((floor) => (
                    <button
                      key={floor}
                      onClick={() => setSelectedFloor(floor)}
                      className={`px-3 py-1 text-sm rounded transition-colors text-[#4391a5] ${
                        floor === selectedFloor
                          ? "bg-[#4391a5] text-white"
                          : "bg-[#333333]/90 hover:bg-gray-600"
                      }`}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setClose(!close)}
              className={`w-full mt-4 py-2 ${
                !close ? "bg-[#dadada]" : "bg-[#4391a5]"
              } text-black cursor-pointer rounded text-sm  transition-colors`}
            >
              {!close ? "Close" : "Select floor"}
            </button>
          </div>
        </div>

        {/* Apartment Details */}

        {unitData.map((item) => {
          const { id, status, unit_number, area, unit_type } = item;
          return (
            <div
              className={`fixed left-45 top-71 transform -translate-y-1/2 z-50   rounded-2xl text-white flex flex-col items-center justify-between  scale-80 origin-top-right p-1`}
            >
              <div className="bg-[#333333]/90 text-[#bdbdbd] p-4 rounded-lg w-74 flex flex-col items-center gap-4">
                <div>
                  <h1 className="text-[#bdbdbd] text-xl">APARTMENT DETAILS</h1>
                </div>
                <div className="border-1 w-[90%] p-2 rounded-lg">
                  <p>Unit {unit_number}</p>
                </div>
                <div className="border-1 w-[90%] p-2  rounded-lg">
                  <p>{unit_type}</p>
                </div>
                <div className="border-1 w-[90%] p-2  rounded-lg">
                  <p>unit status : {status}</p>
                </div>
                <div className="border-1 w-[90%] p-2  rounded-lg">
                  <p>Total Area {area} Sq.Ft</p>
                </div>
                <div className="w-[90%]">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-cyan-500 rounded-lg w-full text-white cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Booking form */}
        {unitData.map((item) => {
          const { id, status, unit_number, area, unit_type } = item;
          return (
            <BookingModal
              key={id}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              unitNumber={unit_number}
              unitType={unit_type}
              totalArea={area}
            />
          );
        })}

        {/* Zoom Controls */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white/80 rounded-full hover:bg-white shadow-lg transition-colors"
            aria-label="Zoom in"
          >
            <Plus className="w-6 h-6" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white/80 rounded-full hover:bg-white shadow-lg transition-colors"
            aria-label="Zoom out"
          >
            <Minus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
