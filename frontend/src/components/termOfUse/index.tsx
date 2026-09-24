"use client";
import React, { useEffect, useState } from "react";
import TypoGraphy from "../commonUI/typoGraphy";

import { API_CALL } from "@/API/Routes";
interface PrivacyDetail {
  bodyData: string;
}

const SkeletonLoader: React.FC = () => (
  <div className="skeleton-loader mb-5">
    <div className="h-8 bg-gray-300 rounded animate-pulse w-3/4 mb-4"></div>
    <div className="h-6 bg-gray-300 animate-pulse rounded w-1/2"></div>
  </div>
);
const TermOfUse = () => {
  const [termDetail, setTermDetail] = useState<PrivacyDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTermData = async () => {
    try {
      const response = await API_CALL.STATIC_PAGES.get({
        slug: "terms-and-condition",
      });

      if (response.data.success) {
        setTermDetail(response.data.data[0]);
      }
    } catch (err) {
      console.error("Error fetching privacy data:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTermData();
  }, []);
  return (
    <>
      <section className="lg:py-[100px] pb-[50px] pt-[100px]">
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="lg:pt-[50px]">
            <TypoGraphy
              as="h1"
              variant="heading"
              text="Term Of Use"
              customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[80px]  !leading-[1.2] max-[358px]:text-4xl  text-5xl md:text-7xl text-[#FFFFFF]  font-black"
            />
            {/* <TypoGraphy
              variant="paragraph"
              text="Privacy"
              customCss="text-[35px] max-[350px]:text-3xl lg:mr-[10px] font-black text-[#fff] lg:text-right lg:mt-[-78px] mt-[-20px] max-[1023px]:text-center"
            /> */}
          </div>
          <div className="About Privacy text-white  p-5 mt-9  bg-auto bg-no-repeat  text-left">
            {loading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : (
              <>
                {termDetail && (
                  <div
                    className={`text-[#fff]`}
                    dangerouslySetInnerHTML={{
                      __html: termDetail?.bodyData,
                    }}
                  />
                )}
              </>
            )}
          </div>

          <div />
        </div>
      </section>
    </>
  );
};

export default TermOfUse;
