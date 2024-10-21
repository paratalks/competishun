import React from "react";
import Image from "next/image";
import { illustrations, images } from "@/constants";

const TextTestimonialWithImage = ({
  image = illustrations.illustration1,
  name = "Yash Rajan",
  testimonial = "My experience with the course has been phenomenal. The insights and clarity I gained\n                  have not only boosted my academic performance but also reshaped the way I approach\n                  challenges. I highly recommend it to anyone serious about growth.",
  achievement = "IIT Madras",
}) => {
  return (
    <div className={"w-full flex justify-center"}>
      <div
        className={
          "w-full md:w-[60vw] lg:w-[30vw] h-[30vh] sm:h-[40vh] lg:h-[50vh] gradientBorder rounded-3xl"
        }
      >
        <div
          className={"bg-[#220D00] overflow-scroll w-full h-full rounded-3xl"}
        >
          <Image
            unoptimized
            src={image || illustrations.illustration1}
            alt={"Sample Image"}
            width={500}
            height={500}
            className={"w-full h-1/2 object-cover"}
          />
          <div className={"w-full h-1/2 p-5"}>
            <p className={"font-extrabold text-xl lg:text-2xl text-white"}>
              {name}
            </p>
            <p
              className={
                "text-gray-400 leading-relaxed text-sm lg:text-base mt-2 overflow-scroll"
              }
            >
              {testimonial}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTestimonialWithImage;
