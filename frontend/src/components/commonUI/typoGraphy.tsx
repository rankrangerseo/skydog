import React from "react";
import { twMerge } from "tailwind-merge";

// Mapping of variant names to their corresponding HTML element
const variantMapping: Record<string, React.ElementType> = {
  heroHeading: "h1",
  headingLarge: "h1",
  heading: "h2", // Section headings semantically h2
  subHeading: "h2",
  mediumHeading: "h3",
  subMediumHeading: "h4",
  headingSmall: "h5",
  headingExtraSmall: "h6",
  paragraph: "p",
  paragraphLarge: "p",
  paragraphSmall: "p",
  paragraphMedium: "p",
};

// Default Tailwind classes for each variant
const defaultStyles: Record<string, string> = {
  heroHeading:
    "text-5xl font-bold font-primary leading-[1.2] text-black md:text-2xl lg:text-5xl",
  headingLarge: "text-3xl font-normal font-primary md:text-4xl  xl:text-7xl ",
  heading:
    "text-5xl font-bold font-primary leading-[1.2] text-black md:text-2xl lg:text-5xl", // Component headings
  subLargeHeading: "text-3xl font-secondary font-bold text-black", // Nested component headings
  subHeading:
    "text-2xl font-secondary font-bold text-black max-md:max-w-full leading-[1.3]", // Example: AED 18.6M
  mediumHeading: "text-xl font-semibold text-black font-secondary",
  subMediumHeading: "text-lg font-secondary font-semibold text-black",
  headingSmall: "text-md text-black font-secondary",
  headingExtraSmall: "text-sm text-black font-secondary",
  paragraph: "",
  paragraphLarge: "text-md font-secondary text-black text-lg",
  paragraphMedium:
    "text-md font-secondary text-black md:text-base leading-[1.2]",
  paragraphSmall: "text-sm font-secondary text-black",
};

// Define the props type for the Typography component
type TypographyProps = {
  text: React.ReactNode;
  customCss?: string;
  variant?: keyof typeof variantMapping;
  as?: React.ElementType;
};

// Functional Typography component with flexible variant and styles
const TypoGraphy: React.FC<TypographyProps> = ({
  text,
  customCss = "",
  variant = "paragraph",
  as,
}) => {
  const Component = as || variantMapping[variant] || "p"; // Fallback to 'p' if the variant is undefined
  const styles = defaultStyles[variant] || ""; // Fallback to an empty string if no styles defined
  return <Component className={twMerge(styles, customCss)}>{text}</Component>;
};

export default TypoGraphy;
