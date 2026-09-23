"use client";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

import { API_CALL } from "@/API/Routes";
interface NftItem {
  image: string | StaticImageData;
  title: string;
}
export const useFetchNftData = () => {
  const [nftData, setNftData] = useState<NftItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API_CALL.SLIDER.get({});

        if (Array.isArray(response.data)) {
          setNftData(response.data);
        } else {
          if (response.data && Array.isArray(response.data.data)) {
            setNftData(response.data.data);
          } else {
            throw new Error("Invalid data format received from API");
          }
        }
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { nftData, loading };
};
