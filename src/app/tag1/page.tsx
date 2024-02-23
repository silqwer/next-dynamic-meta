import React from "react";

import ogImage from "1.png";

export async function generateMetadata() {
  return {
    openGraph: {
      title: `오픈 그래프로 생성된 타이틀`,
      description: "오픈 그래프로 생성된 description",
      url: `https://twin.world`,
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
  };
}

export default function Tag1() {
  return <div>Tag1</div>;
}
