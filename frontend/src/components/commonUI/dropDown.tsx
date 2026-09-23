"use client";
import React, { useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface DropdownOption {
  label: string;
  href: string;
  image?: string | StaticImageData;
}

interface DropdownProps {
  options: DropdownOption[];
  isOpen: boolean;
  onClose: () => void;
  dropdownClass?: string;
}

const DropDown: React.FC<DropdownProps> = ({
  options,
  isOpen,
  onClose,
  dropdownClass = "",
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className={`absolute z-[99]  mt-2 ${dropdownClass}`}>
      <ul className="">
        {options.map((option, index) => (
          <Link
            href={option.href}
            key={index}
            onClick={onClose}
            className="text-[#000000] text-[12px] text-center"
          >
            <li
              className={`${
                dropdownClass === "custom-dropdown"
                  ? "hover:underline px-[15px] py-1 text-left text-[13px] w-full"
                  : "hover:bg-gray-200 p-3"
              }`}
            >
              {option.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
