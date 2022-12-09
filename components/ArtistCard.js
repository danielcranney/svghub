import React from "react";
import Image from "next/image";

export const ArtistCard = ({
  fullName,
  role,
  description,
  profilePic,
  portfolioLink,
}) => {
  return (
    <article className="box">
      <div className="w-full h-52 block overflow-hidden rounded-2xl">
        <Image
          src={profilePic}
          width={580}
          height={580}
          className="scale-150"
          alt="Testimonial Image 1"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl">{fullName}</h3>
        <p className="header-sm opacity-75">{role}</p>
        <a>@snehakadaba</a>
      </div>
    </article>
  );
};
