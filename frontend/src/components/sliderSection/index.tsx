import React from 'react'

const SlidersSection = () => {
  return (
    <div className="">
      <div className="relative ">
        <div className="absolute top-0 w-full transform -skew-y-3 bg-[#FF35A7] py-[10px]">
          <div className="animate-scroll whitespace-nowrap w-full gap-[48px] flex items-center overflow-hidden">
            {[...Array(23)].map((_, i) => (
              <div key={i} className="flex items-center gap-[48px]">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="64"
                    viewBox="0 0 63 64"
                    fill="none"
                  >
                    <path
                      d="M7.68787 33.1422C7.70261 33.4797 7.98547 33.7429 8.32326 33.7449C20.6311 33.8177 30.9109 43.2374 32.0561 55.492C32.0875 55.8284 32.3744 56.0872 32.7119 56.0725C33.0494 56.0578 33.3126 55.7749 33.3146 55.4371C33.3874 43.1292 42.8071 32.8495 55.0617 31.7043C55.3981 31.6728 55.6569 31.3859 55.6422 31.0485C55.6275 30.711 55.3446 30.4477 55.0068 30.4457C42.6989 30.3729 32.4192 20.9533 31.274 8.69861C31.2425 8.36228 30.9556 8.10344 30.6182 8.11817C30.2807 8.13291 30.0174 8.41577 30.0154 8.75356C29.9426 21.0614 20.523 31.3412 8.26832 32.4864C7.93198 32.5178 7.67314 32.8047 7.68787 33.1422Z"
                      fill="#FFEC15"
                    />
                  </svg>
                </span>
                <span className="text-white font-[400] uppercase text-[79.416px]">
                  SKYDOG
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidersSection;
