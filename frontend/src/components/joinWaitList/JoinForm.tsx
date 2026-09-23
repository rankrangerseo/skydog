"use client";
import { baseUrl } from "@/API/baseCall";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  walletAddress: string;
  twitterHandle: string;
  isFollowed: boolean;
  recaptchaToken: string;
}

interface Errors {
  name?: string;
  email?: string;
  walletAddress?: string;
  isFollowed?: string;
  recaptcha?: string;
}

const JoinForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    walletAddress: "",
    twitterHandle: "",
    isFollowed: false,
    recaptchaToken: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: Errors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.walletAddress) {
      newErrors.walletAddress = "Address is required";
      valid = false;
    }
    if (!formData.isFollowed) {
      newErrors.isFollowed = "You must follow!";
      valid = false;
    }
    if (!formData.recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const payload = {
          ...formData,
          g_recaptcha_response: formData.recaptchaToken,
        };

        await axios.post(
          baseUrl + "/access/waitlist/create",
          payload
        );

        toast.success("Form submitted successfully!", { autoClose: 3000 });
      } catch (error: any) {
        console.error("Error submitting form data:", error);
        toast.error(
          error.response?.data?.message ||
            "Error submitting form data. Please try again.",
          { autoClose: 3000 }
        );
      } finally {
        setFormData({
          name: "",
          email: "",
          walletAddress: "",
          twitterHandle: "",
          isFollowed: false,
          recaptchaToken: "",
        });
      }
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData({
      ...formData,
      recaptchaToken: token || "",
    });
  };

  const handleFollowClick = () => {
    window.open("https://x.com/SkyDogSocialNFT", "_blank");
    setFormData({
      ...formData,
      isFollowed: true,
    });
  };

  return (
    <div className="mt-[30px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-semibold quicksand text-[#000000]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold quicksand text-[#000000]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email (optional)"
            className="mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="walletAddress"
            className="block text-sm font-semibold quicksand text-[#000000]"
          >
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            placeholder="0xE298...F3A2"
            className="mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484]"
          />
          {errors.walletAddress && (
            <p className="text-red-500 text-sm">{errors.walletAddress}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="twitterHandle"
            className="block text-sm font-semibold quicksand text-[#000000]"
          >
            Twitter Link
          </label>
          <input
            type="text"
            id="twitterHandle"
            name="twitterHandle"
            value={formData.twitterHandle}
            onChange={handleChange}
            placeholder="Enter Twitter link (optional)"
            className="mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484]"
          />
        </div>

        <div className="mt-3">
          <button
            type="button"
            onClick={handleFollowClick}
            className="w-full border-[1px] border-[#0F84EB] rounded-[5px] px-[32px] py-[18px] text-[18px] text-[#0F84EB] font-bold flex items-center justify-center gap-[10px] h-[50px] text-center mt-4"
          >
            Follow us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.2031 1.875H17.9609L11.9375 8.75781L19.0234 18.125H13.4766L9.12891 12.4453L4.16016 18.125H1.39844L7.83984 10.7617L1.04688 1.875H6.73437L10.6602 7.06641L15.2031 1.875ZM14.2344 16.4766H15.7617L5.90234 3.4375H4.26172L14.2344 16.4766Z"
                fill="#0F84EB"
              />
            </svg>
          </button>
        </div>

        {/* Google reCAPTCHA */}
        <div className="my-5">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleRecaptchaChange}
          />
          {errors.recaptcha && (
            <p className="text-red-500 text-sm">{errors.recaptcha}</p>
          )}
        </div>

        <div className="mt-3">
          <button
            disabled={!formData.isFollowed || !formData.recaptchaToken}
            type="submit"
            className={`w-full ${
              formData.isFollowed && formData.recaptchaToken
                ? "join-btn cursor-pointer"
                : "diabled-join-btn cursor-not-allowed"
            } px-[32px] py-[18px] carbon text-[25px] font-black flex items-center justify-center h-[50px] text-center mt-4`}
          >
            Join Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;
