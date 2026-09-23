"use client";

import { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";
import BaseModal from "../commonUI/modals";
import TypoGraphy from "../commonUI/typoGraphy";
import { toast } from "react-toastify";
import { baseUrl } from "@/API/baseCall";
interface ModelPopUpProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MinitForm: React.FC<ModelPopUpProps> = ({ isOpen, setIsOpen }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [checkState, setCheckState] = useState<
    "initial" | "eligible" | "not-eligible"
  >("initial");
  const [isLoading, setIsLoading] = useState(false);

  const [debouncedWalletAddress] = useDebounce(walletAddress, 1000);

  useEffect(() => {
    if (!debouncedWalletAddress || debouncedWalletAddress.length < 10) return;

    checkWalletEligibility(debouncedWalletAddress);
  }, [debouncedWalletAddress]);

  useEffect(() => {
    if (walletAddress && walletAddress !== debouncedWalletAddress) {
      setIsLoading(true);
    }
  }, [walletAddress, debouncedWalletAddress]);

  const checkWalletEligibility = async (address: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${baseUrl}/access/whitelist/checkIfExists/${address}`
      );
      const data = await response.json();

      if (data.success && data.data.exists) {
        setCheckState("eligible");
        toast.success("Your wallet is whitelisted!");
      } else {
        setCheckState("not-eligible");
        toast.warning("Your wallet is not whitelisted.");
      }
    } catch (error) {
      console.error("Error checking wallet:", error);
      setCheckState("not-eligible");
      toast.error("Failed to check wallet eligibility.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCheckState("initial");
    setWalletAddress("");
    setIsLoading(false);
  };
  return (
    <>
      <BaseModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        widthClass="sm:w-[390px] w-[340px]"
        isBlur
        title=""
      >
        <div className="">
          <TypoGraphy
            variant="paragraph"
            text="CHECK MINT ACCESS"
            customCss="sm:text-[32px] text-2xl font-black carbon text-[#000000]"
          />

          {checkState === "initial" && (
            <>
              <div className="relative mt-4 ">
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="Paste your Ethereum wallet address here"
                  className="w-full border-b-[1px] text-xs font-medium border-b-[#000000] py-2 text-black focus:outline-none focus:border-black placeholder:text-[#848484]"
                  autoFocus
                />
                {isLoading && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin h-5 w-5 border-2 border-[#000] border-t-transparent rounded-full"></div>
                  </div>
                )}
              </div>
            </>
          )}

          {checkState === "eligible" && (
            <>
              <div className="flex items-center mt-4  w-full gap-2 sm:gap-4">
                <div className="">
                  <TypoGraphy
                    variant="paragraph"
                    text={walletAddress}
                    customCss="text-[#03BC2E] truncate text-xs font-medium  border-b-[1px] border-b-[#03BC2E] py-2"
                  />
                </div>
                <div onClick={resetForm} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10884_1509)">
                      <path
                        d="M8.25 12.75L10.5 15L15.75 9.75"
                        stroke="#03BC2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#03BC2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10884_1509">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </>
          )}

          {checkState === "not-eligible" && (
            <>
              <div className="flex items-center mt-4  w-full gap-2 sm:gap-4">
                <div className="">
                  <TypoGraphy
                    variant="paragraph"
                    text={walletAddress}
                    customCss="text-[#DA4140] text-xs font-medium  border-b-[1px] border-b-[#DA4140] py-2"
                  />
                </div>
                <div onClick={resetForm} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10884_1526)">
                      <path
                        d="M15 9L9 15"
                        stroke="#DA4140"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9L15 15"
                        stroke="#DA4140"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#DA4140"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10884_1526">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </BaseModal>
    </>
  );
};

export default MinitForm;
