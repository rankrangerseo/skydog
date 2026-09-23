"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "@/API/baseCall";
import { toast } from "react-toastify";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  company: Yup.string().required("Company name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message is too short"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);

    try {
      const formData = {
        name: values.name,
        email: values.email,

        company: values.company,
        mobile: values.mobile,
        message: values.message,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(baseUrl + "/contact/create", formData);
      // console.log("Form submitted successfully:", response.data);
      toast.success(
        "Thank you for contacting us! We will get back to you ASAP!",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",

          email: "",
          mobile: "",
          company: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6 mt-[30px]">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-semibold quicksand text-[#000000]"
              >
                Full Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter full name"
                className={`mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484] ${
                  errors.name && touched.name ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold quicksand text-[#000000]"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="user@domain.com"
                className={`mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484] ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold quicksand text-[#000000]"
              >
                Company
              </label>
              <Field
                id="company"
                name="company"
                type="text"
                placeholder="Enter company name"
                className={`mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484] ${
                  errors.company && touched.company ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold quicksand text-[#000000]"
              >
                Phone Number
              </label>
              <Field
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                className={`mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484] ${
                  errors.mobile && touched.mobile ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold quicksand text-[#000000]"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Type you message"
                rows={1}
                className={`mt-2.5 text-sm font-medium quicksand text-[#000000] block w-full border-b-[1px] border-[#000000] bg-transparent border-solid outline-none focus:ring-0 placeholder-[#848484] resize-none ${
                  errors.message && touched.message ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting }
              className={`w-full  ${
                isSubmitting 
                  ? "join-btn cursor-pointer"
                  : "diabled-join-btn  cursor-not-allowed"
              } px-[32px] py-[18px] carbon text-[25px] font-black flex items-center justify-center h-[50px] text-center mt-4`}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ContactForm;
