import React, { useState } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const BookingModal = ({ isOpen, onClose, unitNumber, unitType, totalArea }) => {
  if (!isOpen) return null;
  const [page, setPage] = useState(0);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    channel: "",
    sales: "",
    aadhar: "",
    pan: "",
    chequeNo: "",
    amount: "",
    tcv: "",
  });

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setForm((currData) => {
      return { ...currData, [changeField]: newValue };
    });
  };
  const submitForm = () => {
    console.log(form.firstname, form.lastname);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-8">
      <div
        className="relative w-full max-w-4xl bg-[#1A1A1A] text-white rounded-b-lg shadow-xl
          animate-[slideDown_0.3s_ease-out]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
        >
          <X size={20} />
        </button>

        {/* Unit Info Header - Fixed at top */}
        <div className="bg-[#1A1A1A] p-8 border-b border-gray-800">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-gray-300">
              <div>
                UNIT NUMBER: <span className="text-white">{unitNumber}</span>
              </div>
            </div>
            <div className="text-gray-300">
              <div>
                UNIT TYPE: <span className="text-white">{unitType}</span>
              </div>
            </div>
          </div>
          <div className="text-gray-300 mt-4">
            <div>
              TOTAL AREA:{" "}
              <span className="text-white">{totalArea} Sq. Ft.</span>
            </div>
          </div>
        </div>

        {/* Main Content Area with Fixed Left Nav and Scrollable Form */}
        <div className="flex relative">
          {/* Left Navigation - Fixed */}
          <div className="w-60 flex flex-col items-center border-r border-gray-800 p-6 space-y-2 bg-[#1A1A1A]">
            <div className="flex flex-col items-center space-x-2 p-3 bg-[#375E6D]/10 rounded w-10">
              <FontAwesomeIcon icon={faUser} />

              <span className="text-base">Customer Details</span>
            </div>

            <div className="flex flex-col items-center space-x-3 p-3">
              <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-base">KYC Details</span>
            </div>

            <div className="flex flex-col items-center space-x-3 p-3">
              <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-base">Cheque Details</span>
            </div>
            <div className="flex flex-col items-center space-x-2 p-3 bg-[#375E6D]/10 rounded w-10">
              <FontAwesomeIcon className="text-xl" icon={faFaceSmile} />
              <span className="text-base">Review Bookings</span>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 h-[400px] relative overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateY(-${page * 100}%)` }}
            >
              <div className="h-full">
                <div className="absolute inset-0 overflow-y-auto">
                  {page === 0 && (
                    <form className="p-8 space-y-12  min-h-full">
                      <div className="grid grid-cols-2 gap-8">
                        <input
                          type="text"
                          placeholder="FIRST NAME"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                          name="firstname"
                          value={form.firstname}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="LAST NAME"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                          name="lastname"
                          value={form.lastname}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <input
                          type="email"
                          placeholder="EMAIL"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                        <div className="flex gap-3">
                          <select className="bg-transparent border border-gray-700 rounded px-4 py-4 text-base w-24 focus:border-[#375E6D] focus:outline-none">
                            <option>+91</option>
                            <option>+92</option>
                          </select>
                          <input
                            type="number"
                            placeholder="PHONE NUMBER"
                            className="flex-1 bg-transparent border border-gray-700 rounded px-2 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="py-4">
                        <label className="flex items-center space-x-3 text-base">
                          <input
                            type="radio"
                            name="ownership"
                            className="w-5 h-5 text-[#375E6D] focus:ring-[#375E6D]"
                          />
                          <span>Single Owner</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <input
                          type="text"
                          placeholder="CHANNEL PARTNER"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                          name="channel"
                          value={form.channel}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="RM (SALEPERSON)"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                          name="sales"
                          value={form.sales}
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  )}
                </div>

                <div className="absolute inset-0 translate-y-full overflow-y-auto">
                  {page === 1 && (
                    <form className="p-8 space-y-12  min-h-full">
                      <div className="flex items-center gap-2">
                        <label htmlFor="aadhar">AADHAR NUMBER</label>
                        <input
                          id="aadhar"
                          type="number"
                          placeholder="AADHAR NUMBER"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-[70%]"
                          name="aadhar"
                          value={form.aadhar}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1">
                        <textarea
                          placeholder="UPLOAD AADHAR CARD"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-full"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor="pan">PAN NUMBER</label>
                        <input
                          id="pan"
                          type="number"
                          placeholder="PAN NUMBER"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-[80%]"
                          name="pan"
                          value={form.pan}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1">
                        <textarea
                          placeholder="UPLOAD PAN CARD"
                          className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none"
                        />
                      </div>
                    </form>
                  )}
                </div>
                <div className="absolute inset-0 translate-y-[200%] overflow-y-auto">
                  {page === 2 && (
                    <form className="p-8 space-y-12  min-h-full">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="cheque" className="px-1">
                            CHEQUE OR REF NO.
                          </label>
                          <input
                            id="cheque"
                            type="number"
                            placeholder="Cheque No."
                            className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-full"
                            name="chequeNo"
                            value={form.chequeNo}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="amount">CHEQUE AMOUNT</label>
                          <input
                            id="amount"
                            type="number"
                            placeholder="Amount"
                            className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-full"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="tcv" className="px-1">
                            TCV
                          </label>
                          <input
                            id="tcv"
                            type="text"
                            placeholder=""
                            className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-full"
                            name="tcv"
                            value={form.tcv}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <textarea
                            id=""
                            type="text"
                            placeholder="Upload Cheque (if available)"
                            className="bg-transparent border border-gray-700 rounded px-6 py-4 text-base focus:border-[#375E6D] focus:outline-none w-full"
                          />
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 translate-y-[300%] overflow-y-auto">
                {page === 3 && (
                  <div className="p-8 space-y-12">
                    <h1 className="text-xl p-1 mb-12">Review Booking</h1>
                    <div className="flex w-full flex-wrap">
                      {Object.keys(form).map((key) => (
                        <h1 className="text-lg w-1/2 p-3 text-[#c0c0c0]">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                          {form[key]}
                        </h1>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Button - Fixed at bottom */}
        <div className="bg-[#1A1A1A] p-6 flex justify-end border-t border-gray-800 gap-5">
          <button
            onClick={() => previousPage()}
            className="bg-[#375E6D] text-white px-10 py-3 rounded text-base hover:bg-[#2D4D5A] transition-colors"
          >
            Previous
          </button>
          {page === 3 ? (
            <button className="bg-[#375E6D] text-white px-10 py-3 rounded text-base hover:bg-[#2D4D5A] transition-colors">
              Submit
            </button>
          ) : (
            <button
              onClick={() => nextPage()}
              className="bg-[#375E6D] text-white px-10 py-3 rounded text-base hover:bg-[#2D4D5A] transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
