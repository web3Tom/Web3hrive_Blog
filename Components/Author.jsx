import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute m-auto left-0 right-0 flex flex-row justify-center items-center -top-8 h-16 w-48 bg-white rounded-full">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height="150px"
          width="150px"
          className="align-middle object-contain"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
