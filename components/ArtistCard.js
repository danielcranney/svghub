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
        <div className="flex mx-auto mt-2 gap-x-1">
          <a className="flex w-6 h-6" href={portfolioLink}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
          <a className="flex w-6 h-6" href={portfolioLink}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path
                className="fill-brand hover:fill-darkest"
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};
