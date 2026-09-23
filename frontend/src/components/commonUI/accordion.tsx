import React from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
};

const ToggleIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <g clip-path="url(#clip0_5703_4490)">
            <path
              opacity="0.2"
              d="M25 5.5H7C5.89543 5.5 5 6.39543 5 7.5V25.5C5 26.6046 5.89543 27.5 7 27.5H25C26.1046 27.5 27 26.6046 27 25.5V7.5C27 6.39543 26.1046 5.5 25 5.5Z"
              fill="white"
            />
            <path
              d="M5 16.5H27"
              stroke="url(#paint0_linear_5703_4490)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 16.5L5 16.5"
              stroke="url(#paint1_linear_5703_4490)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5703_4490"
              x1="15.1555"
              y1="17.5"
              x2="15.1555"
              y2="16.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66B3FF" />
              <stop offset="0.642338" stop-color="#E6F2FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5703_4490"
              x1="5"
              y1="16.9616"
              x2="27"
              y2="16.9617"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66B3FF" />
              <stop offset="0.642338" stop-color="#E6F2FF" />
            </linearGradient>
            <clipPath id="clip0_5703_4490">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <g clip-path="url(#clip0_5703_4498)">
            <path
              opacity="0.2"
              d="M25 5.5H7C5.89543 5.5 5 6.39543 5 7.5V25.5C5 26.6046 5.89543 27.5 7 27.5H25C26.1046 27.5 27 26.6046 27 25.5V7.5C27 6.39543 26.1046 5.5 25 5.5Z"
              fill="white"
            />
            <path
              d="M5 16.5H27"
              stroke="url(#paint0_linear_5703_4498)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 5.5V27.5"
              stroke="url(#paint1_linear_5703_4498)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5703_4498"
              x1="15.1555"
              y1="17.5"
              x2="15.1555"
              y2="16.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66B3FF" />
              <stop offset="0.642338" stop-color="#E6F2FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5703_4498"
              x1="16.4616"
              y1="27.5"
              x2="16.4617"
              y2="5.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66B3FF" />
              <stop offset="0.642338" stop-color="#E6F2FF" />
            </linearGradient>
            <clipPath id="clip0_5703_4498">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
  isLast,
}) => {
  return (
    <div className={`${isLast ? "faq-border" : "faq-border"} `}>
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className={`flex justify-between items-center w-full py-[32px] text-left focus:outline-none ${
          isOpen ? "" : ""
        }`}
      >
        <span className="font-semibold md:text-base text-sm lg:text-lg xl:text-[28px] text-[#FFFFFF]">
          {title}
        </span>
        <ToggleIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className=" pb-[32px]">
          <p className="text-[#E5F2FF] md:text-base lg:text-lg xl:text-xl text-sm font-[300]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
